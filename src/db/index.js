import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log("MongoDB conntion SUCCESS");
    } catch (error) {
        console.log("MongoDB conntion FAILED", error);
        process.exit(1);

    }

}


export default connectDB;