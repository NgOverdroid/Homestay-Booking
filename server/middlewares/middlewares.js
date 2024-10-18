const {verify} = require('jsonwebtoken');
require('dotenv').config({path: "../.env"});

function registrationware(req, res, next) {
    if(req.cookies.token){
        if (verify(req.cookies.token, process.env.JWT_SECRET)){
            res.sendStatus(201);
        }
        else 
            res.sendStatus(401);
    }
    else {
        next();
    }
}

module.exports = {registrationware};