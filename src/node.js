//in node, we use fs
var fs = require('fs');

var index = require('./index');

index.load = function (source) {
    //default db.json
    source = source || 'db.json';
    return JSON.parse(fs.readFileSync(source, 'utf-8'));
};

index.save = function (db, dist) {
    //default db.json
    dist = dist || 'db.json';
    //we use 2
    fs.writeFileSync(dist, JSON.stringify(db, null, 2));
};

module.exports = index;