const express = require("express");
const router = express.Router();
const {signin, emailExists} = require('../models/user');

router.post('/', async (req, res) =>{
    try{
        const find_user = await signin(req.body.email);
        if (find_user)
            res.sendStatus(200);
        else
            res.sendStatus(404);
    } catch(error) {
        res.send("Error at signin.js " + error);
    }
});

module.exports = router;
