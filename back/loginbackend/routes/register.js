var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydb";
//var app = express();

router.post('/', function(req, res, next) {
       // res.send({ message : 'Sucess..'});
    var obj = JSON.stringify(req.body);
    var jsonObj = JSON.parse(obj);
    MongoClient.connect(url, function(err, db) {
     
      var dbo = db.db("mydb");
 
      dbo.collection('customers').insertOne(jsonObj, function(err, user) {
           

       if (err) throw err;
      console.log("1 document inserted");
      db.close();
       });
 });
});
      
    

module.exports = router;
    