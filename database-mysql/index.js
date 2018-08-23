var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode',
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertOne = function(task, callback) {
 connection.query('INSERT INTO items (task) VALUES (?)',
   [task], (err, results, fields) => {
     if(err) {
       callback(err, null);
     } else {
       console.log(results);
       cbcallback(null, results);
     }
   });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
