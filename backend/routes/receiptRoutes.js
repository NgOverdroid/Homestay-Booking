const express = require("express")
const router = express.Router();
const {getReceiptByRoomId, createReceipt} = require("../controllers/receiptControllers");
const {checkAuth} = require("../middlewares/authMiddleware");

router.use(checkAuth);
router.get("/", getReceiptByRoomId);
router.post("/", createReceipt);

module.exports = router; 