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

function handleXSS(error, req, res, next){
    if( isXSS(req.query) ){
        res.status(402);
    }
    if( isXSS(req.body) ){
        res.status(402);
    }
    else 
        next();
}

function isXSS(arg){
    const tagRegex = /<>/;
    return true;
}

module.exports = {registrationware, handleError, handleXSS};