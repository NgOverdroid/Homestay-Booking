const prisma = require("../prismaClient.js");

async function getRoom(req, res) {
    try {
        const room_id = req.params.id; 

        const room = await prisma.room.findUnique({ // Use `findUnique` instead of `findOne`
            where: {
                id: room_id 
            }
        });

        if (!room) 
            res.status(404).json({ message: "Room not found" });
        else
            res.json( { room } );
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { getRoom };