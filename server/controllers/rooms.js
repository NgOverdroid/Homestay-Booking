const express = require("express");
const router = express.Router();
const {getRoom} = require("../models/Room");
const {getVacantDates} = require('../models/Contract');

router.get("/:room_id", async (req, res) => {
    try {
        const room = await getRoom(req.params.room_id);
        const vacant_dates = await getVacantDates(req.params.room_id);
        if(room || vacant_dates)
            res.send({room, vacant_dates});
        else
            res.senStatus(400);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving the room" });
    }
})

router.post("/contract", async (req, res) => {
    try {
        const contract = await createContract();
        res.json(contract);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating a contract" });
    }
})


module.exports = router 
