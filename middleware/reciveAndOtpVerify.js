import {generateFourDigitOTP} from './verifyOTP.js'
import {storeOtp} from './generateOTP.js'


const reviveAndVerifyOtp = (async(req,res)=>{


    const {otp} = req.body
    if (storeOtp[0]===otp) {
        res.send(true)
        console.log(otp);
        
        return true
    }
    return false
})
export {reviveAndVerifyOtp}