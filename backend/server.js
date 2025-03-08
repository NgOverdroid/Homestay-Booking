const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
// const rooms_urls = require('./controllers/roomRoutes');
const signin_urls = require('./routes/signInRoutes');
const signup_urls = require('./routes/signUpRoutes');
const auth_urls = require('./routes/authRoutes');
const receipt_urls = require('./routes/receiptRoutes');

/* Middlewares */
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); //cross origin sites
app.use(cookieParser()); // parses cookies
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses query parameters bodies

/* Urls */
// app.get('/', async (req, res) =>{
//     try{
//         const places = await prisma.room.;
//         res.json(places);
//     }
//     catch(err){
//         next(err);
//     }
// })

// app.use('/room', rooms_urls);
app.use('/signin', signin_urls);
app.use('/signup', signup_urls);
app.use('/receipt', receipt_urls);
app.use('/auth_checkpoint', auth_urls);

/*Handle Error middleware*/
// app.use(handleError);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on port 127.0.0.1:${PORT}`)
})