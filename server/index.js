var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
// console.log(res)
  items.selectAll(function(err, results) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
    });
});
app.post('/items', function(req, res){
  let task = req.body.task;

 if(!task) {
   res.sendStatus(400);
 } else {
   database.insertOne(task, (err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
