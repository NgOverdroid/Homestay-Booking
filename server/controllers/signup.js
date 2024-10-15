const express = require('express');
const router = express.Router();
const { createNewUser, emailExists } = require('../models/user');

router.get('/', async(req, res) => {
    const email_exists = await emailExists(req);
    if(email_exists)
        res.sendStatus();
    else
        res.sendStatus();
});

router.post('/', async (req, res) =>{
    try{
        const user_creation = await createNewUser(
            req.body.first_name, 
            req.body.last_name, 
            req.body.email, 
            req.body.password);
        if(user_creation)
            return res.sendStatus(201);
    }
    catch(error){
        res.send("Error at signup.js" + error);
    }
});

module.exports = router;

