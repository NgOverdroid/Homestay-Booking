const express = require("express")
const router = express.Router();
const signUp = require("../controllers/signUpControllers");

router.get("/", signUp);
    
module.exports = router; 