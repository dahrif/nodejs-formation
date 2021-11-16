var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { email: /^d/ };
    dbo.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  // filter avec la premiere lettre