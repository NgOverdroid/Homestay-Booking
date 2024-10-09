const express = require('express');
const router = express.Router();
const { createNewUser, emailExists } = require('../models/user');

router.use((req,res,next) => {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (jwt)
        next();
    else 
        res.send({
            jwt_status: true
        });
});

router.get('/', async(req, res) => {
    const email_exists = await emailExists(req);
    if(email_exists)
        res.send({
            email_unique: true
        });
    else
        res.send({
            email_unique: false
        });
});

router.post('/', async (req, res) =>{
    try{
        const user_creation = await createNewUser(
            req.body.first_name, 
            req.body.last_name, 
            req.body.email, 
            req.body.password);
        if(user_creation)
            return resstatus(201).json({
                message: "User created successfully",
            });
        else 
            res.send();
    }
    catch(error){
        res.send("Error at signup.js" + error);
    }
});

module.exports = router;