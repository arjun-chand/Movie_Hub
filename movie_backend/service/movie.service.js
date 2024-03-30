const Movie = require("../model/movie.model")

async function getMovies() {
    try {
        let MovieData = await Movie.find({})
        return MovieData
    } catch (error) {
        console.log(error)
    }
}

async function addMovie(movie) {
    try {
        console.log(movie)
        let MovieModel = new Movie(movie)
        let MovieData = await MovieModel.save(movie)
        return {success:true}
    } catch (error) {
        console.log(error)
    }
}

async function updateMovie(MovieId, movie) {
    try {
        let response = await Movie.updateOne({ _id: MovieId }, movie)
        return response
    } catch (error) {
        console.log(error)
    }
}

async function deleteMovie(MovieId) {
    try {
        let response = await Movie.remove({ _id: MovieId })
        return response
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie
}