const express = require("express");
const router = express.Router();
const {signin} = require('../models/UserModel');
const {registrationware, handleXSS} = require('../middlewares/middlewares');

router.use(registrationware);

router.get('/', async (req, res) => {
    res.sendStatus(200);
});

router.use(handleXSS);
router.post('/', async (req, res) =>{
    try{
        const find_user = await signin(req.body.email, req.body.password);
        if (find_user)
            res.sendStatus(200);
        else
            res.sendStatus(404);
    } 
    catch(error) {
        next(error);
    }
});

module.exports = router;
