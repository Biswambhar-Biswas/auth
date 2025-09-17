import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dbConnect = async()=>{
    try{
        const mongoconnect =await mongoose.connect(`${process.env.MONGODB_URI}`);
        // console.log(mongoconnect.connection.host);
        console.log('Connection Ducessfull with DB');
        
    }
    catch(error){
        console.log(error);
        process.exit(1)
        
    }
}

export {dbConnect}
