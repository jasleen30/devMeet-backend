const express = require("express");

const app = express();

// When we make any api call it goes to the middleware chain and finally goes to the request handler which finally sends the response back. So all below mentioned function can be considered as a middleware from which the request passed along

app.use("/",(req,res, next)=>{
    // res.send("route handler") If we return response from here it will not go further
    next(); // on next it will go to other routes mentioned below
});

app.get("/user", (req,res, next) =>{
    next();
},
(req,res, next)=>{
    next();

},
(req,res,next) =>{
    res.send("second Route Handler");
}
);
