var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { username: /^A/ };
  var newvalues = {$set: {username: "Minnie"} };
  dbo.collection("users").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.modifiedCount + " document(s) updated");
    db.close();
  });
});