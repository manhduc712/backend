import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URI)
        if (dbConnect.connection.readyState === 1) {
            console.log("MongoDB connected")
        } else {
            console.log("MongoDB not connected")
        }
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export default connectDB