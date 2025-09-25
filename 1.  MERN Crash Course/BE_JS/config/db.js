import mongoose from "mongoose";
export const connectDB = async (url) => {
    try {
        const con = await mongoose.connect("mongodb+srv://huymawork:mxrWiDCQXSe2pBb7@cluster0.uinzmvx.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to database");
        process.exit(1);
    }
}