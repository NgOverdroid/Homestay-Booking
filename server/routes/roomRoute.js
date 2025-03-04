const express = require("express");
const router = express.Router();
const {findRoom} = require("../controllers/roomController");

router.get("/:room_id", findRoom);