import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();

const Labs = mongoose.model('Labs');

const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.use("/labsDelete", router);
};

router.post('/', jsonParser, (req, res) => {
    const { id } = req.body;
    Labs.findByIdAndRemove(id, (err) => {
        if(err) throw err;
        res.json({success: true});
    })
});