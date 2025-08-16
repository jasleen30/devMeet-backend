const express = require("express");

const app = express();

// app.use("/route",rh,[rh2,rh3],rh4,rh5); rh=> route handler

app.get("/user", (req, res, next) =>{
    console.log("Handling the route user!!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 2!!");

    // res.send("2nd Response!!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 3!!");

    // res.send("3rd Response!!");
    next();
},
(req, res, next) =>{
    console.log("Handling the route user 4!!");
    // res.send("4th Response!!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 5!!");
    res.send("5th Response!!");
}
);

app.listen(3000, () =>{
    console.log("Server is connected to port 3000......")
})
