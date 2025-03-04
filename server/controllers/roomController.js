async function findRoom(req, res) {
    try {
        const room = await getRoom(req.params.room_id);
        const vacant_dates = await getVacantDates(req.params.room_id);
        if(room || vacant_dates)
            res.send({room, vacant_dates});
        else
            res.sendStatus(400);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving the room" });
    }
}

module.exports = findRoom;
