var url = "mongodb://localhost:27017/";
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Albums", function(err, res) {
    if (err) throw err;
    console.log("Collection Albums created!");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Payments", function(err, res) {
    if (err) throw err;
    console.log("Collection Payments created!");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Messages", function(err, res) {
    if (err) throw err;
    console.log("Collection Messages created!");
    db.close();
  });
});