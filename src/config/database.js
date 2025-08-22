const mongoose = require("mongoose");

const connectDB = async () => {
    try {
    console.log(process.env.DB_CONNECTION_SECRET);
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
    } catch (error) {
        console.log("Error",error)
        process.exit(1)
    }
    
};

module.exports = connectDB;