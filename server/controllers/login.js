import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import { loginSuccess, loginFailure } from '../lib/utils';

const router = express.Router();
const User = mongoose.model('User');
const jsonParser = bodyParser.json();

module.exports =  function(app){
    app.use('/login', router);
}

router.post('/', jsonParser, (req, res) => {
    const { password, name } = req.body || {};
    const passHash = crypto.createHash('md5').update(password).digest('hex');
    User.findByName({name: name, password: passHash}, (error, user) => {
        if(!user) {
            console.log('login failure');
            res.status(200).json(loginFailure({msg:"账号或者密码不正确!"}));
        }else {
            console.log('login success');
            res.status(200).json(loginSuccess({msg:"登录成功!"}));
        }
    })
})