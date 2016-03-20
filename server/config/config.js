var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

var config = {
    root: rootPath,
    secret: 'blog',
    port: 8000,
    db: 'mongodb://localhost/blog'
};

module.exports = config;