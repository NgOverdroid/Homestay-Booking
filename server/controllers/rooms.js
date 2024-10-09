const express = require("express");
const router = express.Router();
const {getRoom} = require("../models/Room");

router.get("/room:room_id", async (req, res) => {
    try {
        const room = await getRoom(req.params.room_id);
        if(room)
            res.json({
                "room": room,
            });
        else
            res.status(400).json({message: "room not found"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving the room" });
    }
})

router.post("/room:room_id/contract", async (req, res) => {
    try {
        const contract = await createContract();
        res.json({
            "contract_created": true,
            "contract": contract
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating a contract" });
    }
})


module.exports = router 
