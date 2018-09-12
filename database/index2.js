var mysql = require('mysql');


var con2 = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "holacode",
 database: "chilango"
});
var selectAll = function(cb) {
 con2.query('SELECT * FROM likes', (err, results, fields)=> {
   if(err) {
     cb(err, null);
   } else {
     cb(null, results);
   }
 });
};
var insertOne = function(likes,unlikes, cb) {
 con2.query('INSERT INTO likes (likes, unlikes) VALUES (?, ?)',
   [likes, unlikes], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       cb(null, results);
     }
   });
};
module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
