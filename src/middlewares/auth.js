const jwt = require("jsonwebtoken");

const userAuth = async(req, res, next) =>{
    try {
        const token = req.cookies;
        if(!token) {
            throw new Error("Token is not valid!!");
        }

        const decodeObj = await jwt.verify(token, "12345");

        const{_id} = decodeObj;
        const user = await User.findById(_id);
        if(!user) {
            throw new Error("User not found");
        } else{
            req.user = user;
            next();
        }
    } catch (err) {
        res.status(400).send("Error:" + err.message);
    }
};

module.exports = {
    userAuth
}
