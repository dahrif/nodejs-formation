var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { email: "dahri@gmail.com" };
    dbo.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

//  Filtrer les données avec l'email dahri@gmail.com