const express = require('express');
const hotel = require('../models/Hotel');
const router = express.Router();

const hotelController = require("../controller/hotel_controller");
//create
router.post("/", hotelController.createHotel);
//update
router.put("/:id", hotelController.updateHotel);
//delete
router.delete("/id:",hotelController.deleteHotel);
//get

router.get("/id:", hotelController.getHotel);
//getall

router.get("/", hotelController.getAllHotel);;

module.exports = router;