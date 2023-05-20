const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    typee : {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }, 
    address : {
        type: String,
        required : true
    },
    distance : {
        type : String,
        required : true
    },
    photos : {
        type : [String],
        required : true
    }, 
    desc : {
        type : String,
        required : true
    },
    rating : {
        type: Number,
        min : 0,
        max : 5
    },
    rooms : {
        type : [String],
        required: true
    },
    cheapestPrice : {
        type : Number,
        required: true
    },
    featured : {
        type : Boolean,
        default: false
    }
});

const hotel = mongoose.model('hotel', hotelSchema);
module.exports = hotel;