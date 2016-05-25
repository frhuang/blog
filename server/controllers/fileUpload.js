import formidable from 'formidable';
import fs from 'fs';
import bodyParser from 'body-parser';
import express from 'express';

const  router = express.Router();
const jsonParser = bodyParser.json();

module.exports= function (app) {
    app.use("/fileUpload", router);
};

router.post('/', jsonParser, function (req, res) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = 'public/upload/';
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    const { file } = req.body;
    console.log(file);
});