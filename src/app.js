const express = require("express");

const app = express();

// app.use("/route",rh,[rh2,rh3],rh4,rh5); rh=> route handler


const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) =>{
    res.send("User logged in successfully!");
});

app.get("/user/data", userAuth, (req, res) =>{
    res.send("User Data Sent");
});

app.get("/admin/getAllData", (req,res) =>{
    res.send("All Data Sent");
});

app.get("admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
