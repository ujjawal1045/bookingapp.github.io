const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },

    password: {
        type: String,
        required: false
    },

    name: {
        type: String,
        required: false
    }
},{
    //storing data of user crestion snd updation
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;