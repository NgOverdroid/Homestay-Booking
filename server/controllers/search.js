const express = require('express');
const router = express.Router();
const { searchRooms } = require('../models/Room');

router.use('/', async (req, res) => {
    const results = await searchRooms(req.query.state, req.query.checkin, req.query.checkout);
    
});

