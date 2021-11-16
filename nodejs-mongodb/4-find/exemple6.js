var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[2].email);
      db.close();
    });
  });

// Executer Tous sauf Id