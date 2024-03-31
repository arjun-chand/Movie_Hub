const express = require('express')
const router = express.Router()
const MovieService = require("../service/movie.service")

router.get("/", (req, res) => {
    MovieService.getMovies(req.query).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(400).json(error)
    })
})

router.post("/upload", async (req, res) => {
    try {
        let data = await MovieService.addMovie(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/update/:id", async (req, res) => {
    try {
        let data = await MovieService.updateMovie(req.params.id, req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        let data = await MovieService.deleteMovie(req.params.id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router