import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MONGO : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("Error while connecting to the database : ", error);
        process.exit(1)
    }

}