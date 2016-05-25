import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Labs = mongoose.model('Labs');

const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.use("/labsLists", router);
};

router.post('/', jsonParser, (req, res) => {
    Labs.find( (err, labs) => {
        if(err) throw err;
        res.status(200).json(labs);
    });
});