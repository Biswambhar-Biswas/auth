 const generateFourDigitOTP = function() {
return Math.floor(Math.random() * 9000) + 1000;
}


const storeOtp = {
    otp:generateFourDigitOTP
}


export {storeOtp}
export {generateFourDigitOTP}
