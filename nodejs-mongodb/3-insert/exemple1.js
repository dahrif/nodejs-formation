var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { username: "HIHI", email: "hihi@gmail.com", password: "123456" };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// inserer un objet