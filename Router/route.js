import express from "express";
import {registerUser,verifyotp} from '../Controller/register.controller.js'

const router = express.Router()

router.post('/register',registerUser)
router.post('/verifyotp',verifyotp)



export {router}