const express = require("express")
const router = express.Router();
const signIn = require("../controllers/signInControllers");

router.post("/", signIn);
    
module.exports = router;