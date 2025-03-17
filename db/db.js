import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        await mongoose.connect (process.env.MONGO_URI,{dbName:"restApi"});
        console.log("Connected Successfully");
        
    } catch (error) {
        console.log("Error");
        
    }
}

