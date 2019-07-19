var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
//var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/mydb";
//var app = express();



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

/* GET users listing. */
router.post('/', function(req, res, next) {
//res.send({message: 'Testing to get data from backend'});

  var username = req.body.username;
  var password = req.body.password;
  
  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("mydb");
    dbo.collection('customers').findOne({ 'name': username}, function(err, user) {
          
            if(user ===null){
                res.send({ 'success': false, message: 'User not found'});
                
             }else if (user.name === username && user.password === password){
                res.send({ 'success': true, message: 'Login valid'});
           } else {
             res.send({ 'success': false, message: 'Invalid user name or password'});
           }
    });
  });



});


module.exports = router;
