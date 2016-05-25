import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Labs = mongoose.model('Labs');

const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.use("/labsEdit", router);
};

router.post('/', jsonParser, (req, res) => {
    const { id } = req.body;
    Labs.findByIdAndUpdate(id, req.body, (err) => {
        if(err) throw err;
        res.status(200).json({success: true});
    })
});