import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Labs = mongoose.model('Labs');

const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.use("/labsDetail", router);
};

router.post('/', jsonParser, (req, res) => {
    const { id } = req.body;
    Labs.findById(id, (err, article) => {
        if(err) throw err;
        res.status(200).json(article);
    })
});