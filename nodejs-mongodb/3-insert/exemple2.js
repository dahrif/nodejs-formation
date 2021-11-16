var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { username: "Dahri", email: "dahri22@gmail.com", password: "123456" },
    { username: "Fatima", email: "fatima@gmail.com", password: "123456" },
    { username: "Asmae", email: "asmae@gmail.com", password: "123456" },
    { username: "hamidouch", email: "hamidouch@gmail.com", password: "123456" }
  
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

// Insérer plusieur objets