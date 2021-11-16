var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { username: /^F/ };
  dbo.collection("users").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.deletedCount + " document(s) deleted");
    db.close();
  });
});


