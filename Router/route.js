import express from "express";
import {registerUser} from '../Controller/register.controller.js'
import {verifyOtp} from '../middleware/verifyOTP.js'
import {reviveAndVerifyOtp} from '../middleware/reciveAndOtpVerify.js'


const router = express.Router()

router.post('/register',registerUser)
router.post('/verifyEmail',verifyOtp)
router.post('/otp',reviveAndVerifyOtp)



export {router}