var index = require('./index');

index.load = function (source) {
    //default db.json
    source = source || 'db.json';
    //in browser we use localStorage
    return JSON.parse(localStorage.getItem(source));
};

index.save = function (db, dist) {
    //default db.json
    dist = dist || 'db.json';
    //in browser we use localStorage
    localStorage.setItem(dist, JSON.stringify(db, null, 2));
};