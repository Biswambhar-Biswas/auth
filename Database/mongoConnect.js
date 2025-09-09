import mongoose from "mongoose";

const dbConnect = async()=>{
    try{
        const mongoconnect =await mongoose.connect('mongodb://localhost:27017/register')
        // console.log(mongoconnect.connection.host);
        console.log('Connection Ducessfull with DB');
        
    }
    catch(error){
        console.log(error);
        process.exit(1)
        
    }
}

export {dbConnect}
