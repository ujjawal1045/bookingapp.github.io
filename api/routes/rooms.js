const express = require('express');
const router = express.Router();

const roomController = require('../controller/room_controller');

//create
router.post("/:hotelid", roomController.createRoom);
//update
router.put("/:id", roomController.updateRoom);
//delete
router.delete("/:id/:hotelid",roomController.deleteRoom);
//get

router.get("/:id", roomController.getRoom);
//getall

router.get("/", roomController.getAllRoom);
module.exports = router;