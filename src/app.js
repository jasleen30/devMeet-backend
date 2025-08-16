const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./model/user");

app.post("/signup", async(req, res) =>{
    //Creating a new instance of the User model
    const user = new User({
        firstName:"Sachin",
        lastName: "Tendulkar",
        emailId: "sachin@kohli.com",
        password: "sachin@123"
    });

    try{
        await user.save();
        res.send("User Added successfully!");
    } catch (err) {
        res.status(400).send("Error saving the user");
    }
})

// Connect to DB
connectDB()
    .then(() => {
        console.log("Database connection established....");
        app.listen(3000, () =>{
            console.log("Server is successfully listening on port 3000....");
        });
    }).catch((err) =>{
        console.log("Database cannot be connected!!");
    });



app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
