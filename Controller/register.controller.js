import { userModel } from '../Database/user.models.js'
import { encriptPass } from '../middleware/bcrypt.js'
import { reviveAndVerifyOtp } from '../middleware/reciveAndOtpVerify.js'

const registerUser = (async (req, res) => {
  try {
    // const dataToCreateUserJS = res.body
    const { username, email, fullName, password} = req.body


    // Check email
    const existedemail = await userModel.findOne({ email: email });
    if (existedemail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check username
    const existedusername = await userModel.findOne({ username: username });
    if (existedusername===true) {
      return res.status(400).json({ message: "Username already exists" });
    }


    const Hashedpassword = await encriptPass(password)


    if (reviveAndVerifyOtp) {
      const result = await userModel.create({ username, email, password: Hashedpassword, fullName });
      console.log(result);
      res.status(200).json({ Registered: true });
    }
    if (reviveAndVerifyOtp == false) {
      res.status(400).json({ Registered: false, message: "Wrong OTP" });

    }




  }


  catch (error) {
    res.status(500).json({ error: "error to store data in database" })

  }



})



export { registerUser }
