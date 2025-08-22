const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const authRouter = express.Router();

authRouter.post("/signup", async(req, res) =>{
    //Creating a new instance of the User model
    try{
        // validation of data
        validateSignUpData(req);

        const {firstName, lastName, emailId, password} = req.body;

        // Encrypt the password
        const passwordHash = await bcrypt.hash(password, 10);
        console.log(passwordHash);

        // Creating a new instance of the User model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });

        await user.save();
        res.send("User Added successfully!");
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

authRouter.post("/login", async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({emailId:email});
        console.log("ass",user)
        if(!user) {
            throw new Error("Invalid credentials");
        }
        const isPasswordValid = await user.validatePassword(password)

        if(isPasswordValid) {
            const token = await user.getJWT();
            user.password=undefined;
            return res.cookie("token", token, {
                expires:new Date(Date.now() + 8 * 3600000),
            }).json({token, user})
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (err) {
        console.log("error",err)
        res.status(400).send("ERROR: " + err.message);
    }
});

authRouter.post("/logout", async(req, res) =>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.send("Logout Successfull!");
});

module.exports = authRouter;