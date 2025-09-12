import { userModel } from '../Database/user.models.js'
import { encriptPass } from '../middleware/bcrypt.js'
import { sendMail } from '../middleware/nodemailer.js'
import { generateFourDigitOTP } from '../middleware/generateOTP.js'





let storeOtp = {
    otp: "",
    userData: {}

}





const registerUser = (async (req, res) => {

    try {

        // const dataToCreateUserJS = res.body

        const { username, email, fullName, password } = req.body





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


    res.json({ message: "ok" })


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



        if (storeOtp.otp && storeOtp.otp == otp) {



            const { username, email, password } = storeOtp.userData



            const result = await userModel.create({ username, email, password });

            console.log(result);
            
            storeOtp = { otp: "", userData: {} }

            return res.status(200).json({ Registered: true });



        }

        return res.json({ message: "wrong OTP" })

    } catch (error) {

        console.log("Error in verifyOtp part",error);



    }



})





export { registerUser, verifyotp }

