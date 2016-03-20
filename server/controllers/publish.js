import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import async from 'async';
import { publishSuccess, publishFailure } from '../lib/utils';

const  router = express.Router();

const Blog = mongoose.model('Blog');

const jsonParser = bodyParser.json();

module.exports= function (app) {
    app.use("/publish", router);
};
//publish article
router.post('/', jsonParser,  (req, res) => {
    Blog.create(req.body, (err) => {
        if(err) throw err;
        console.log('publish success');
        res.json({success: true});
    })
});
