var _ = require('../src/node');

var db = _.load();
//{ user: [ { id: 1, name: 'yc' } ] }
console.log(db);


//find id=1 in db.user
//{ id: 1, name: 'yc' }
console.log(_.get(db.user, 1));

//{ name: 'insert by auto', id: 2 }
console.log(_.insert(db.user, {name: 'insert by auto', id: 2}));

//{ name: 'insert by auto', id: 1 }
console.log(_.insert(db.user, {name: 'insert by auto', id: 1}));

_.save(db);
