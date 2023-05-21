const Hotel = require('../models/Hotel');
module.exports.createHotel = async  (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}

module.exports.updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err);
    }
}

module.exports.deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted");
    } catch (err) {
        next(err);
    }
}

module.exports.getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}

module.exports.getAllHotel = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch(err) {
        next(err);
    }
}

module.exports.CountByType = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch(err) {
        next(err);
    }
}

module.exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
       const list = await Promise.all(cities.map(city=> {
        return Hotel.countDocuments({city: city})
       }))
        res.status(200).json(list);
    } catch(err) {
        next(err);
    }
}