const express = require("express")
const router = express.Router();
const signIn = require("../controllers/signInControllers");

router.get("/", signIn);
    
module.exports = router;