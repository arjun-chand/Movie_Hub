const express = require('express');
const post_route = express.Router();
const postController = require("../controller/PostController")
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"./public/postImages");
    },
    filename:function(req, file, cb){
       const name = Date.now()+'-'+file.originalname;
       cb(num, name);
    }
});

const upload = multer({ storage: storage })


post_route.post('/upload', upload.single('image'), postController.createPost);

post_route.get('/getAllMovies', postController.getAllMovies)

post_route.get('/delete/:name', postController.deleteMovie)


module.exports = post_route;