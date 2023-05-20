const express = require('express');
const app = express();

const port = 8000;


//adding mongoose databse

const db = require('./config/mongoose');

app.listen(port, function(err) {
    if(err){
        console.log('error in running the server', err);
    }

    console.log(`server is running on port : ${port}`);
});