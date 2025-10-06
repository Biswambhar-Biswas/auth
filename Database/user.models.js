import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true,'already exist'],

    },
    email: {
        type: String,
        required: [true, "Username is required"],
        unique: [true,'already exist'],

    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
    },
    coin:{
        type:Number,
        default:0
    }
}, { timestamps: true }
)

 const userModel =new mongoose.model('usermodel',userSchema)

 export {userModel}