import { userModel } from '../Database/user.models.js'
import bcrypt from "bcryptjs"

const loginUser = (async (req, res) => {
    try {
        const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: "⚠️ Email and password are required" });
    }
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(401).json({ message: "Invalid Password" })

        }

        res.status(200).json({
            message: "Login successful",
           value:true
        });
    } catch (error) {
        console.log(error);

    }
})

export { loginUser }