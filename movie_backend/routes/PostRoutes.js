const express = require('express');
const post_route = express();
const bodyParser = require('body-parser');

post_route.use(bodyParser.json);
post_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require('path');

post_route.use(express.static('public'))
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,"../public/postImages"), function(error, success){
            if(error){
                console.log(error);
            }
        });
    },
    filename:function(req, file, cb){
       const name = Date.now()+'-'+file.originalname;
       cb(num, name, function(error, success){
        if(error){
            console.log(error);
        }
       });
    }
});

const upload = multer({storage:storage})
const postController = require("../controller/PostController")
post_route.post('/upload',upload.single('image'), postController.createPost);
post_route.get('/getAllMovies',postController.getAllMovies)
post_route.get('/delete/:name',postController.deleteMovie)
module.exports = post_route;