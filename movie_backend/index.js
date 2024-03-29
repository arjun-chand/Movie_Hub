const express = require('express');
const app = express();
const cors = require('cors');
const post_route = require('./routes/PostRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017/movies");

app.use(cors({ origin: "*" }));

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.use('/api', post_route);

app.listen(8000, function(){
    console.log("server is running");
})