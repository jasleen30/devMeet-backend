const express = require("express");

const app = express();

app.use("/", (req, res) =>{
    res.send("Namaste Everyone!!");
});

app.listen(3000,() =>{
    console.log("server is connected");
})
