const jwt = require("jsonwebtoken");
require('dotenv').config({ path: "../.env" });
const { createToken }  = require("../controllers/authController");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

function checkAuth(req, res, next){
    const authHeader = req.headers["authorization"]; // Get the Authorization header
    const access_token = authHeader && authHeader.split(" ")[1]; // Extract token after "Bearer"

    if (!access_token) 
        return res.status(401).json({ message: "Access token required" });

    jwt.verify(access_token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            const refresh_token = req.cookies.refresh_token;
            jwt.verify(refresh_token, REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) 
                    res.status(401).json({ message: "Unauthorized"});
                else {
                    const new_access_token = createToken(user, "accessToken");
                    req.access_token = new_access_token;
                }
            })
        }
        req.user = user; // Attach decoded user info to request
        next(); 
    });
}

module.exports = {checkAuth};