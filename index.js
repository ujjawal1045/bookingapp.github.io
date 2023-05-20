const express = require('express');

const authRoute = require('./api/routes/auth.js');
const usersRoute = require('./api/routes/users.js');
const hotelRoute = require('./api/routes/hotels.js');
const roomRoute = require('./api/routes/rooms.js');
const app = express();

const port = 8000;


//adding mongoose databse

const db = require('./config/mongoose');

//api request
app.get("/", (req, res) => {
    res.send('hello first request');
})

//middleware
app.use("/api/auth", authRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomRoute);
app.use("/api/hotels",hotelRoute);


app.listen(port, function(err) {
    if(err){
        console.log('error in running the server', err);
    }

    console.log(`server is running on port : ${port}`);
});