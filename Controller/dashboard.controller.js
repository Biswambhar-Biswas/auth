//1st we have to secure this route, no can send data to it
//verify token
//we will take all order or reword point, address,
import jwt from 'jsonwebtoken'
import { userModel } from '../Database/user.models.js'
import dotenv from 'dotenv'
dotenv.config()


const dashboard = (async (req, res) => {
    //send all data to user
    try {
        const token = req.cookies.token
        if (!token) {
            res.json({ message: "Invalide booking" })
        }
        jwt.verify(token, process.env.COOKIE_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' + err });
            }
            //recive user booking data
            const { location, dateAndTime, waste_category, phone } = req.body
            console.log(location, dateAndTime);
        })

    } catch (error) {
        console.log(error, 'error to send user data' + error);

    }
})

//******************************send data to user*********************************
const userData = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ message: "Invalid booking" });
    }
    const decoded = jwt.verify(token, process.env.COOKIE_SECRET)
    const user = await userModel.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ username: user.username ,email:user.email});

  } catch (error) {
    console.log("error to send user data", error);
    res.status(500).json({ error: "Server error" });
  }
};
export { dashboard, userData }