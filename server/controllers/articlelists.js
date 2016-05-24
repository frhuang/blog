import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Blog = mongoose.model('Blog');

const jsonParser = bodyParser.json();

module.exports= function (app) {
    app.use("/articleLists", router);
};

router.post('/', jsonParser, (req, res) => {
    Blog.find( (err, articles) => {
        if(err) throw err;
        res.status(200).json(articles);
    });
});