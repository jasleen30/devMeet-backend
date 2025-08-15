const express = require("express");

const app = express();

app.use("/", (req, res)=>{
    res.send("Hiii Jasleen!!!");
});

app.get("/hello",(req,res) =>{
    res.send("hello hello hello!");
});

app.use("/test", (req,res) =>{
    res.send("Hello from the server");
});

app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
