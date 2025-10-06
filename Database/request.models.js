import mongoose from "mongoose";


const Requestschema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, 'already exist'],
    },
    orderHistory: [
        {
            type: String
        }
    ]
}

)

const RequestHistory = new mongoose.model('Requestschema', Requestschema)

export { RequestHistory }