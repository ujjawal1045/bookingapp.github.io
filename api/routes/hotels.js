const express = require('express');
const hotel = require('../models/Hotel');
const router = express.Router();

//create
router.post("/", async (req, res)=> {
    const newHotel = new hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err)
        console.log("error in server",err);
    }
})
//update
//delete
//get
//getall

module.exports = router;