const express = require("express")
const router = express.Router();
const signUp = require("../controllers/signUpControllers");

router.post("/", signUp);
    
module.exports = router; 