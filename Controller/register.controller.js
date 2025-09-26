import { __dirname } from '../utils/path.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { userModel } from '../Database/user.models.js'
import { encriptPass } from '../middleware/bcrypt.js'
import { sendMail } from '../middleware/nodemailer.js'
import { generateFourDigitOTP } from '../middleware/generateOTP.js'
import dotenv from 'dotenv'
dotenv.config()






let storeOtp = {
    otp: "",
    userData: {}

}





const registerUser = (async (req, res) => {

    try {

        // const dataToCreateUserJS = res.body

        const { username, email, fullName, password } = req.body

        // console.log(fullName,email);
        

        // Check email

        const existedemail = await userModel.findOne({ email: email });
        if (existedemail) return res.status(400).json({ message: "Email already exists" });



        // Check username

        const existedusername = await userModel.findOne({ username: username });
        if (existedusername) {
            return res.status(400).json({ message: "Username already exists" });

        }


        //protect hash password

        const Hashedpassword = await encriptPass(password)

        //generate otp

        const otp = generateFourDigitOTP()

        //store otp and user data

        storeOtp = {
            otp,
            userData: { username, email, fullName, password: Hashedpassword }

        };


        //send otp and email to send otp

        sendMail(email, otp)
        res.json({ message: "ok", redirect: '/user/otpVerify' })

    }


    catch (error) {

        res.status(500).json({ error: "error to store data in database" })



    }



})





//verify otp and store data in db

const verifyotp = (async (req, res) => {

    try {

        const { otp } = req.body

        // console.log(otp);



        if (storeOtp.otp == otp) {



            const {fullName, username, email, password } = storeOtp.userData


            //database a save korlam
            const result = await userModel.create({fullName, username, email, password });
            console.log(result);
            


            //token banalam
            const token = jwt.sign({ email }, process.env.COOKIE_SECRET, { expiresIn: '1h' })


                        //redirect to dashboard 
            res
            .cookie('token', token, {
                httpOnly: true,
                secure: process.env.COOKIE_SECRET ==="production",
                sameSite: 'strict',
                maxAge: 3600000
            })
            .status(200)
            .json({ registered: true, redirect: '/user' })



            return storeOtp = { otp: "", userData: {} }





        }

        return res.json({ message: "wrong OTP" })

    } catch (error) {

        console.log("Error in verifyOtp part", error);



    }



})





export { registerUser, verifyotp }

