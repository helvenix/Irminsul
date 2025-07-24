import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log("Connected to MongoDB")
    } catch(e){
        console.error("Database connection failed", e)
    }
} 

export default connectDB

