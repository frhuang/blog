import path from 'path';
import express from 'express';
import glob from 'glob';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import ConnectMongo from 'connect-mongo';
import session from 'express-session';
import methodOverride from 'method-override';

const mongoStore = new ConnectMongo(session);

export default function(app, config) {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compression());
    app.use(express.static(config.root + '/public'));
    app.use(methodOverride());
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: config.secret,
        key: config.db,
        cookie: {maxAge: 1000*60 *60*24*30},
        store: new mongoStore({
            url: config.db,
            port: config.port,
            secret: config.secret
        })
    }));
}

