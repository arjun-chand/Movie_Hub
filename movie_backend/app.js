const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const MovieApi = require("./controller/movie.api")


app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/movies", MovieApi)

app.listen(3001, function () {
  mongoose.connect("mongodb+srv://chandarjun10:moviepassword@movie.iodsmi8.mongodb.net/movie?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Server started on port 3001");

});