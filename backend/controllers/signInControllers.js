const prisma = require("../prismaClient.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../controllers/authController.js");

async function signIn(req, res){
    if(req.cookies.refresh_token){
        return res.status(403);
    }
    try {
        const email = req.body.email;
        const password = req.body.password;
        
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (user){
            const password_match = await bcrypt.compare(password, user.password);
            //false
            if(!password_match) //true
                return res.status(400).json({message: "Incorrect password"});
            else {
                const access_token = createToken(user, "accessToken");
                const refresh_token = createToken(user, "refreshToken");
                res.cookie('refresh_token', refresh_token, {
                    httpOnly: true, 
                    maxAge: 7 * 24 * 60 * 60 * 1000
                });
                res.status(201).json({ 
                    user: {
                        id: user.id,
                        email: user.email,
                        username: user.name
                    },
                    access_token: access_token,
                });
            }
        }

        else
            return res.status(400).json({message: "Username does not exist"});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = signIn;