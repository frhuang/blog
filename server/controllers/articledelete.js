import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Blog = mongoose.model('Blog');

const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.use("/articleDelete", router);
};

router.post('/', jsonParser, (req, res) => {
    const { id } = req.body;
    Blog.findByIdAndRemove(id, (err) => {
        if(err) throw err;
        res.json({success: true});
    })
});