import path, { join } from "path"
// import jwt from "jsonwebtoken"
import { __dirname } from '../utils/path.js'

const riderLoginServe = (async(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/rider/riderLogin.html'))
})

export {riderLoginServe}