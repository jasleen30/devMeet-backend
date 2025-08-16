const express = require("express");

const app = express();

app.use("/", (req, res)=>{
    res.send("Hiii Jasleen!!!");
});

// This will only handle GET call to /user, if we take type as GET this will work
app.get("/user/:userId/:name/:password",(req,res) =>{
    console.log(req.params);
    res.send({firstName:"Jasleen", lastName:"Kaur"});
});
// This will handlde POST call to /user, if we take type as POST this will work
app.post("/user", async(req,res) =>{
    console.log(req.body);
    res.send("Data successfully saved to the database!!");
});

app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
