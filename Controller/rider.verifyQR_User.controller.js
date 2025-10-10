import jwt from 'jsonwebtoken'
import { userModel } from '../Database/user.models.js'


const riderController = (async (req, res) => {

    // const token = req.cookies.token
    // if (!token) {
    //     return res.status(404).json({message:"Token not found"})
    // }
    // jwt.verify()

    try {
        const { email } = req.body
        const user = await userModel.findOne({ email: email })
        if (!user) {
            res.status(404).json({ message: "User Not Found" })
        }

        res.status(200).json({ name: user.fullName, username: user.username })
        // console.log("user", user);
    } catch (error) {
        console.log(error, "Rider Part");
    }
})

export { riderController }