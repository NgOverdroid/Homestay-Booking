const express = require("express")
const router = express.Router();
const {getReceipt, createReceipt} = require("../controllers/receiptControllers");
const {checkAuth} = require("../middlewares/authMiddleware");

router.use(checkAuth);
router.get("/", getReceipt);
router.post("/", createReceipt);

module.exports = router; 