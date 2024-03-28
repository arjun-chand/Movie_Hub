const mongoose = require('mongoose');

// Define the movie schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    description: {
        type: String,
       
    },
    releaseDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        
    },
    rating: {
        type: Number,
        
    },
    cast: {
        type: [String],
       
    },
    image: {
        type: String,
        required: true
    }
});

// Create a Mongoose model from the movie schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
