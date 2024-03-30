const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,

    },
    director:{
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    rating: {
        type: String,
        default: "0"
    },
    source:{
        type: String
    },
   
    image:{
        type: String,
        required: true
    }
    
    
    
});

module.exports = mongoose.model('Movie', Movie);
