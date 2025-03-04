const prisma = require("../prismaClient.js");

async function getReceiptByRoomId(req, res){
    try {
        const userId = req.user.id;
        const room_id = req.params.id;

        const receipt = await prisma.receipt.findUnique({
            where: {
                userId: userId,
                roomId: room_id,
            }
        });

        if (!receipt) {
            return res.status(404).json({ message: "Receipts not found" });
        }
        
        res.json( {receipt, access_token: req.access_token} );
    }
    catch (error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function getCurrentReceipts(req, res) {
    try {
        const userId = req.user.id; 

        const receipts = await prisma.receipt.findMany({
            where: {
                userId: userId,
                paymentStatus: false 
            }
        });

        res.json( {receipts, access_token: req.access_token} );
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function getPastReceipts(req, res){
    try {
        const userId = req.user.id;

        const receipts = await prisma.receipt.findMany({
            where: {
                userId: userId
            }
        });

        res.json(receipts);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

async function createReceipt(req, res){
    try {
        const room_id = req.body.id;
        const checkin_date = req.body.checkin_date;
        const checkout_date = req.body.checkout_date;
        const cost = req.body.cost;

        const receipt = await prisma.receipt.create({
            data: {
                
            }
        })

        res.json({
            data,
            access_token: req.access_token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
}

module.exports = {getCurrentReceipts, createReceipt, getPastReceipts, getReceiptByRoomId};