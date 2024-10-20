const express = require('express');
const router = express.Router();
const { createNewUser, createToken } = require('../models/UserModel');
const {registrationware, handleError} = require('../middlewares/middlewares');

router.use(registrationware);

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.post('/', async (req, res) =>{
    try{
        const user_id = await createNewUser(
            req.body.first_name, 
            req.body.last_name, 
            req.body.email, 
            req.body.password
        );
        if(user_id){
            const token = createToken(user_id);
            res.cookie('token', token, {httpOnly: true, maxAge: 259200000});
            res.sendStatus(201);
        }
        else
            res.sendStatus(404);
    }
    catch(error){
        next(error);   
    }
});

router.use(handleError);

module.exports = router;

