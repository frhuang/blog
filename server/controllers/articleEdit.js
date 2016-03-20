import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
import showdown from 'showdown';

const converter = new showdown.Converter();

const  router = express.Router();

const Blog = mongoose.model('Blog');

const jsonParser = bodyParser.json();

module.exports= function (app) {
    app.use("/articleEdit", router);
};

router.post('/', jsonParser, (req, res) => {
    const { id } = req.body;
    console.log(id);
    Blog.findByIdAndUpdate(id, req.body, (err) => {
        if(err) throw err;
        res.status(200).json({editSuccess: true});
    })
});