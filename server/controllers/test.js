const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    // res.cookie("name", "nghia", {
    //     httpOnly: true,      // Prevents client-side access to the cookie
    //     secure: false,       // Set to true if using HTTPS
    //     sameSite: 'lax',     // Controls cross-site behavior (try 'strict' or 'none' if needed)
    //     path: '/',           // Ensure the cookie is accessible at the root
    // });
});

module.exports = router;