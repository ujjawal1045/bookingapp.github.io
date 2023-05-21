const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },

    maxPeople: {
        type: Number,
        required: false
    },
    desc : {
        type: String,
        required: false
    },

    roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}]
    
},{
    //storing data of room crestion snd updation
    timestamps: true
});

const room = mongoose.model('room', roomSchema);
module.exports = room;