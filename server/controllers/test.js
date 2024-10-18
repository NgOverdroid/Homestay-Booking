const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    req.is_authenticated = true;
    console.log(req);
    res.send(418);
});

//if doesn't exist the cookies value will be null
module.exports = router;

/*


*/