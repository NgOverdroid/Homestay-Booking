const express = require("express");
const router = express.Router();
const {signin} = require('../models/user');

router.post('/', async (req, res) =>{
    try{
        const find_user = await signin(req.body.email);
        if (find_user)
            res.send();
        else
            res.send("This account doesn't exist");
    } catch(error) {
        res.send("Error at signin.js " + error);
    }
});

module.exports = router;
