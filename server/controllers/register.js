import express from 'express';
import mongoose from 'mongoose';
import crypto from 'crypto';
import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import async from 'async';
import { loginSuccess, loginFailure } from '../lib/utils';

const  router = express.Router();

const User = mongoose.model('User');

const jsonParser = bodyParser.json();

module.exports= function (app) {
    app.use("/reg",router);
};
//用户注册
router.post('/', jsonParser, function (req, res) {
    const { name , password } = req.body ;
    const passHash = crypto.createHash('md5').update(password).digest('hex');

    var userEntity = new User({
        name,
        password:passHash
    });
    console.log(passHash);
    //查找是否有同名的
    User.findByName({name:userEntity.name},(error,user)=>{
        if(!user){
            userEntity.save((err,user)=>{
                if(!err){
                    console.log('register success');
                    res.status(200).json(loginSuccess());
                }
            });
        }else {
            console.log('register failure');
            res.json(loginFailure())
        }
    })
});
