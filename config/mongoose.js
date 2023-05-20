const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookingApp');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to MongoDb database"));

db.once('open', function() {
    console.log('connected to database :: MongoDB');
});

module.export = db;