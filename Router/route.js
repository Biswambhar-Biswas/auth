import express from "express";
import {registerUser,verifyotp} from '../Controller/register.controller.js'
import {loginUser} from '../Controller/login.controller.js'
import {logout} from '../Controller/logout.controller.js'
import {dashboard} from "../Controller/dashboard.controller.js";
import {userData} from "../Controller/dashboard.controller.js";
import {serveRegistration} from '../serve HTML file/serve.registration.js'
import {otpVerify} from '../serve HTML file/serve.otp.js'
import {mainDashBoard} from '../serve HTML file/serve.mainDashboard.js'
import { login } from "../serve HTML file/login.serve.js";

//rider
import {serveRiderPage} from '../serve HTML file/rider.serve.js'
import {riderController} from '../Controller/rider.verifyQR_User.controller.js'
import {wasteDataFromRider} from '../Controller/rider.wasteData.controller.js'

import {riderLoginServe} from '../serve HTML file/riderLogin.serve.js'


const router = express.Router()
//user section
router.post('/register',registerUser)
router.post('/verifyotp',verifyotp)
router.post('/login',loginUser)
router.post('/dashboard',dashboard)

//rider section
router.post('/rider',riderController)
router.post('/wastedata',wasteDataFromRider)

//user section send data(user detailes)
router.get('/logout',logout)
router.get('/userData',userData)



//serve files
router.get("/",login)
router.get("/register",serveRegistration)
router.get("/otpVerify",otpVerify)
router.get("/",mainDashBoard)
//rider serve
router.get('/rider',serveRiderPage)
router.get('/riderLogin',riderLoginServe)


export {router}