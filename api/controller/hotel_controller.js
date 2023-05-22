const Hotel = require('../models/Hotel');
const qs = require('qs');
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

// module.exports.getAllHotel = async (req, res, next) => {
//     const{min, max, ...others} = req.query;
//     try {
//         let limit = parseInt(req.query.limit) || 4;
//         const hotels = await Hotel.find({
//             ...others,
//              cheapestPrice: {$gt: min || 1, $lt: max || 999},}).limit(parseInt(limit));
//         res.status(200).json(hotels);
//     } catch(err) {
//         next(err);
//     }
// }

module.exports.getAllHotel = async (req, res, next) => {
    const query = qs.parse(req.url.split('?')[1]);
    const { featured, min, max, city } = query;
    try {
        let limit = parseInt(query.limit) ;
        const queryObject = {};
        if (featured) {
            queryObject.featured = featured === 'true';
        }
        if (min && max) {
            queryObject.cheapestPrice = { $gt: parseInt(min), $lt: parseInt(max) };
        }

        if (city) {
            queryObject.city = city;
        }
        const hotels = await Hotel.find(queryObject).limit(limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}


module.exports.CountByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({typee:"hotel"}) ;
        const apartementCount =  await Hotel.countDocuments({typee:"Apartement"});
        const oyoCount =await Hotel.countDocuments({typee: "oyo hotel"});
        const lodgeCount =await Hotel.countDocuments({typee:"lodge"});
        const resortCount =await Hotel.countDocuments({typee:"resort"});
      
        res.status(200).json([
            {typee:"hotel", count : hotelCount},
            {typee: "resort", count: resortCount},
            {typee:"apartement", count : apartementCount},
            {typee:"oyo hotel", count : oyoCount},
            {typee:"lodge", count: lodgeCount}
        ]);
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