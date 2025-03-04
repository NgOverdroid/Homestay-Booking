const jwt = require("jsonwebtoken");

require('dotenv').config({ path: "../.env" });

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

function createToken(user, type) {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name
    };

    let token;

    if (type == "accessToken")
        token = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

    else if (type == "refreshToken")
        token = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

    return token;
}

function auth(req, res) {
    try {
        const refresh_token = req.cookies?.refresh_token;

        if (!refresh_token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        jwt.verify(refresh_token, REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid refresh token" });
            }
            const access_token = jwt.sign(
                { id: user.id, email: user.email, name: user.name },
                ACCESS_TOKEN_SECRET,
                { expiresIn: "15m" }
            );

            return res.json({ access_token: access_token });
        });
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { createToken, auth };
