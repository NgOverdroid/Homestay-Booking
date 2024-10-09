const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.headers.cookie);
    res.send(req.headers.cookie);
});

module.exports = router;