import mongoose from 'mongoose'

const riderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
                type:String,
        required:true
    }
    
})