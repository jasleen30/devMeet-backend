const express = require("express");

const app = express();

app.use("/", (err, req, res, next) =>{
    if(err) {
        res.status(500).send("Something went wrong");
    }
});

app.get("/getUserData", (req, res) =>{
    ///try {
        throw new Error("dfjfhkj");
    //} catch (error) {
       // res.status(500).send("Some Error contact support team");
    //}
});

app.use("/", (err, req, res, next) =>{
    if(err) {
        // Log your error
        res.status(500).send("something went wrong");
    }
})

app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
