import express from 'express';
import path from 'path';
import config from './config/config';
import db from './config/db';
import exp from './config/app';
import webpackMiddleware from './config/webpackMiddleware';


var app = express();
//database
db(app, config);
//init express config
exp(app, config);
//webpack config
webpackMiddleware(app, config);

app.listen(config.port, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('listening at localhost:'+config.port);
});