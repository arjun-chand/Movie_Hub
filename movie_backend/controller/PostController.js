const Movie = require("../models/Movies");

const createPost = async(req, res)=>{

    try{
        const movie = new Movie({
            title: req.body.title,
            director: req.body.director,
            releaseYear: req.body.releaseYear,
            category: req.body.genre,
            image: req.file.filename
        })
       const movieData = await movie.save();

       res.status(200).send({success:true, msg:"movie-data", data:movieData});

    }catch(error){
        res.status(400).send({success:false, msg:error.message});
    }
}

const  getAllMovies = async(req,res) => {
    
  try{
     const movies = await Movie.find();
    res.status(200).send({success:true, msg:'Movies Data', data:movies})
    }catch(error){
        res.status(400).send({success:false, msg:error.message});
  }
    
}

const deleteMovie = async(req, res) =>{
    try{
       const name = req.param.name;
       await Movie.deleteOne({name: name})
       res.status(200).send({success:true, msg:'post deleted Successfully', data:movies})

    }catch(error){
        res.status(400).send({success:false, msg:error.message});
    }
}

module.exports = {
    createPost,
    getAllMovies,
    deleteMovie
}