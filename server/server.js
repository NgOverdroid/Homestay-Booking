const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const rooms_urls = require('./controllers/rooms');
const signin_urls = require('./controllers/signin');
const signup_urls = require('./controllers/signup');
const test = require('./controllers/test');
const {getHomepageRooms} = require('./models/RoomModel');

/* Middlewares */
app.use(cors()); //cross origin sites
app.use(cookieParser()); // parse cookies
app.use(express.static('public'));
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse query parameters bodies
/* Urls */
app.get('/', async (req, res) =>{
    try{
        const places = await getHomepageRooms();
        res.json(places);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "An error occurred while retrieving rooms" });
    }
})

app.use('/room', rooms_urls);
app.use('/signin', signin_urls);
app.use('/signup', signup_urls);
app.use('/test', test);

const PORT = process.env.DB_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port 127.0.0.1:${PORT}`)
})