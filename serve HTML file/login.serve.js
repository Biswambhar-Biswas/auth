import path from 'path'
import { __dirname } from '../utils/path.js'
import jwt from 'jsonwebtoken'
import dotenv from'dotenv'
dotenv.config()
import { log } from 'console'

const login = (async (req, res) => {
    try {

        const token = req.cookies.token
        if (!token) {
            // return res.json({ message: 'no tokens available' })
            // res.sendFile(path.join(__dirname,'../public/login.html'))
            await res.sendFile(path.join(__dirname, "../public/login.html"))
        }

        else {
            jwt.verify(token, process.env.COOKIE_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }
                res
                    // .json({ message: decoded.email })
                    .sendFile(path.join(__dirname, '../public', "mainApp", 'dashboard.html'))
            })

        }



        // await res.sendFile(path.join(__dirname,"../public/login.html"))

    } catch (error) {

    }
})

export { login }