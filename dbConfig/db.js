import mongoose from "mongoose"

const connectMongoDB = () => {

    // Import Database URL
    const mongoURI = process.env.MONGO_URI

    try {
        mongoose.connect(mongoURI)
        console.log("MongoDB Database connected!")
    } catch (error) {
        console.error("Error connecting to Database")
    }
}

export default connectMongoDB