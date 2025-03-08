const prisma = require("../prismaClient.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../controllers/authController.js");

async function signUp(req, res){
    if(req.cookies.refresh_token){
        return res.status(403).json({message: "Forbidden: Already Signed In"});
    }
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;

        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if(user){
            res.status(400).json({ message: "Email already in use" });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    phone
                }
            });
            const access_token = createToken(newUser, "accessToken");
            const refresh_token = createToken(newUser, "refreshToken");

            res.cookie('refresh_token', refresh_token, {
                httpOnly: true, 
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            res.json({ 
                access_token,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = signUp;