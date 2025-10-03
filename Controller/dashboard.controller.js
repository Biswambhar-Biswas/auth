//1st we have to secure this route, no can send data to it
//verify token
//we will take all order or reword point, address,
import jwt from 'jsonwebtoken'
import { userModel } from '../Database/user.models.js'
import { RequestHistory } from '../Database/request.models.js'
import dotenv from 'dotenv'
dotenv.config()


const dashboard = (async (req, res) => {
  //send all data to user
  try {
    const token = req.cookies.token
    if (!token) {
      res.json({ message: "Invalide booking" })
    }
    jwt.verify(token, process.env.COOKIE_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' + err });
      }
      //recive user booking data
      const { location, dateAndTime, waste_category, phone } = req.body
      if (location == '' || dateAndTime == '' || waste_category == '' || phone == '') {
        return console.log("ALL FIELDS ARE REQUIREED");

      }
      console.log(location, dateAndTime, waste_category, phone);

      const user =await RequestHistory.findOne({email : decoded.email})

      const result = await RequestHistory.updateOne(
        { $push: { orderHistory: `Email:${decoded.email},Date:${dateAndTime},Catagory:${waste_category}` } }
      );
      //console.log(result);

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

    res.json({ username: user.username, email: user.email, fullName: user.fullName, memberSince: user.createdAt, coin: user.coin });

  } catch (error) {
    console.log("error to send user data", error);
    res.status(500).json({ error: "Server error" });
  }
};
export { dashboard, userData }