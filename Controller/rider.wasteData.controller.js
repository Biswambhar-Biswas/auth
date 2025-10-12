// riderController.js
import { recivedNotification } from '../middleware/reacived.nodemiller.js'
import { userModel } from '../Database/user.models.js'

const wasteDataFromRider = async (req, res) => {
  try {
    const { email, category, wasteAmount } = req.body

    if (!email || !category || !wasteAmount) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User Not Found" })
    }

    //  per-kg coin rates
    const priceChart = {
      thermocol: 0.5,
      textiles: 3,
      organic: 2,
      plastic: 2,
      metal: 3,
      glass: 1.5,
      paper: 1,
      ewaste: 5,
      kitchen_garden_waste: 2
    }

    // Normalize category (case-insensitive)
    const normalizedCategory = category.toLowerCase()
    const rate = priceChart[normalizedCategory]

    if (!rate) {
      return res.status(400).json({ message: `Invalid category: ${category}` })
    }

    // Convert weight to number safely
    const weight = Number(wasteAmount)
    if (isNaN(weight) || weight <= 0) {
      return res.status(400).json({ message: "Invalid waste amount" })
    }

    // Calculate coins
    const coin = weight * rate

    // Update user coin balance
    user.coin = (user.coin || 0) + coin
    await user.save()

    console.log(`✅ Category: ${category}, Weight: ${weight}kg, Coins: ${coin}, User: ${email}`)
    //send data to nodemailer to inform users....bony
    //create korlam 1ta object, object a kore data dend korbo nahole mess hoye jabe
    const sendUserDataUsingNodemailer = {
      category, weight, coin, name:await user.fullName,totalCoin:await user.coin
    }
    recivedNotification(user.email,sendUserDataUsingNodemailer)

    return res.status(200).json({
      message: "Coin calculated successfully",
      category,
      wasteAmount: weight,
      coin,
      totalCoins: user.coin
    })

  } catch (error) {
    console.error("❌ Error in wasteDataFromRider Controller:", error)
    return res.status(500).json({ message: "Server Error" })
  }
}

export { wasteDataFromRider }
