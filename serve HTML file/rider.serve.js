import path from "path"
import jwt from "jsonwebtoken"
import { __dirname } from '../utils/path.js'
import dotenv from 'dotenv'
dotenv.config()

const serveRiderPage = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/rider/rider.html'))
}

export {serveRiderPage}
