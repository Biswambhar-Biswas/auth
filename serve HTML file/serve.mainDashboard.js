import path from "path"
import jwt from 'jsonwebtoken'
import { __dirname } from '../utils/path.js'
import dotenv from 'dotenv'
dotenv.config()

const mainDashBoard = (req, res) => {
    const token = req.cookies.token
    if (!token) {
        // return res.json({ message: 'no tokens available' })
        res.sendFile(path.join(__dirname,'../public/login.html'))

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
}

export { mainDashBoard }