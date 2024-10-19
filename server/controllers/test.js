const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    try{
        throw new Error("Some error");
    }
    catch(error){
        res.status(500).send({error: error.message});
    }
});

//if doesn't exist the cookies value will be null
module.exports = router;
