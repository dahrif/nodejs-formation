var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dotenv = require('dotenv');
var url = dotenv;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});