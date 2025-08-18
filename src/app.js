const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./model/user");

app.post("/signup", async(req, res) =>{
    //Creating a new instance of the User model
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User Added successfully!");
    } catch (err) {
        res.status(400).send("Error saving the user");
    }
})

app.get("/user", async(req, res) =>{
    const userEmail = req.body.emailId;
    try {
        console.log(userEmail);
        const user = await User.findOne({emailId: userEmail});
        if(!user) {
            res.status(404).send("User Not found");
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})

// Feed API- GET /feed - get all the users from the database
app.get("/feed", async(req, res) =>{
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

// Delete a user from the database
app.delete("/user", async (req,res) =>{
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete({_id: userId});
        res.send("User deleted successfully");
    } catch(err) {
        res.status(400).send("Something went wrong");
    }
});

// Update data of the user

app.patch("/user/:userId", async(req, res) =>{
    const userId = req.params?.userId;
    const data = req.body;
    try {
        // only allowed keys must be there in request body, 
        const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
        const isUpdateAllowed = Object.keys(data).every((k) =>
            ALLOWED_UPDATES.includes(k)
        );
        if(!isUpdateAllowed) {
            throw new Error("Update not allowed");
        }
        if (data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10");
        }

        const user = await User.findByIdAndUpdate({_id: userId}, data, {
            returnDocument: "after",
            runValidators: true, // bydefault validators not run on update, but we want validations on update so use this field.for example in the model we allowed few gender but if we add something else on update it will not verify, so to make it possible we have to add field "runvalidators"
        });
        res.status(200).send("User supdated successfully");
    } catch (err) {
        res.status(400).send("Update failed:" +err.message);
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
