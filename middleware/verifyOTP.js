import {sendMail} from './nodemailer.js'
import {generateFourDigitOTP,storeOtp} from './generateOTP.js'




const verifyOtp = (async(req,res)=>{
  generateFourDigitOTP()

try {


    const {email} = req.body
    const otp = generateFourDigitOTP

    await sendMail(email,generateFourDigitOTP)
    res.json({ message: "ok"});
} catch (error) {
  console.error("OTP sending failed:", error);
    res.status(500).json({ error: "Failed to send OTP. Please try again later." });
}




    
});



export {verifyOtp,generateFourDigitOTP}