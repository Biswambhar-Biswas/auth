export const generateFourDigitOTP = ()=> {
return Math.floor(Math.random() * 9000) + 1000;
}


const storeOtp = {}


export {storeOtp}


// export {generateFourDigitOTP}
