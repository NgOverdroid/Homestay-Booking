const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token)
        res.send("happy");
    else
        console.log(token);
});

module.exports = router;