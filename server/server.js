const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const rooms_urls = require('./controllers/roomController');
const signin_urls = require('./controllers/signin');
const signup_urls = require('./controllers/signup');
const test = require('./controllers/test');
const {getHomepageRooms} = require('./models/RoomModel');
const {handleError} = require('./middlewares/middlewares');

/* Middlewares */
app.use(cors()); //cross origin sites
app.use(cookieParser()); // parses cookies
app.use(express.static('public')); //serves static files
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses query parameters bodies

/* Urls */
app.get('/', async (req, res) =>{
    try{
        const places = await getHomepageRooms();
        res.json(places);
    }
    catch(err){
        next(err);
    }
})

app.use('/room', rooms_urls);
app.use('/signin', signin_urls);
app.use('/signup', signup_urls);
app.use('/test', test);

/*Handle Error middleware*/
app.use(handleError);

const PORT = process.env.DB_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port 127.0.0.1:${PORT}`)
})