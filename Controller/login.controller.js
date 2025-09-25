import { userModel } from '../Database/user.models.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

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


        const token = jwt.sign({ email }, process.env.COOKIE_SECRET, { expiresIn: '1h' })


        //redirect to dashboard 
        res
            .cookie('token', token, {
                httpOnly: true,
                secure: process.env.COOKIE_SECRET === "production",
                sameSite: 'strict',
                maxAge: 3600000
            })

        res.status(200)
        .json({
            message: "Login successful",
            value: true,
            redirect: '/user'
        })
        
    } catch (error) {
        console.log(error);

    }
})

export { loginUser }