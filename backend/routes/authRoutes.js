const express = require("express")
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/", auth);
    
module.exports = router //export this router from this file