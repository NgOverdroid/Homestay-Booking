const {verify} = require('jsonwebtoken');
require('dotenv').config({path: "../.env"});

function registrationware(req, res, next) {
    if(req.cookies.token){
        res.sendStatus(403);
    }
    else {
        next();
    }
}

function handleError(error, req, res, next){
    res.status(500).json({"error": error});
}

module.exports = {registrationware, handleError};