const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://huymawork:mxrWiDCQXSe2pBb7@cluster0.uinzmvx.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (e) {
        console.log(`Error ${e.message}`);
        process.exit(1);
    }
}

module.exports = connectDB