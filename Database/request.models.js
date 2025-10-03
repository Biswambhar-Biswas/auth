import mongoose from "mongoose";


const Requestschema = new mongoose.Schema({
    userEmail:{
        type:String,
    },
    orderHistory:[
        {
            type:String
        }
    ]
}

)

const RequestHistory = new mongoose.model('Requestschema',Requestschema)

export {RequestHistory}