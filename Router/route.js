import express from "express";
import {registerUser,verifyotp} from '../Controller/register.controller.js'
import {loginUser} from '../Controller/login.controller.js'
import {serveRegistration} from '../serve HTML file/serve.registration.js'
const router = express.Router()

router.post('/register',registerUser)
router.post('/verifyotp',verifyotp)
router.post('/login',loginUser)

router.get("/register",serveRegistration)
router.get("/otpVerify",serveRegistration)


export {router} 