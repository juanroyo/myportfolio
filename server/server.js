const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require("method-override");
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const router = express.Router();
var url = "mongodb://localhost:27017/";

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
/*app.set('view engine', 'ejs')
app.get('/',function(req,res) {
  res.sendFile(path.join('/src/public', __dirname +'/index.html'));
});
app.use(express.static(__dirname))*/
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride());

//--------HOME GET------------
app.get('/', function(req, res) {
   res.send("Hello World!");
});
//--------CART GET-------------
app.get('/cart', function(req, res) {
   res.send("estoy en el carritooo");
});
//--------CART POST-------------
app.post('/contact', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {
          Email: "",
          Message: ""
          };
    dbo.collection("Messages").insertOne(myobj, function(err, result) {
      if (err) throw err;
      console.log("1 document inserted");
      res.json({result: "success"});
      db.close();
});
});
});
//--------POST DE LA SHOP------
app.post('/shop', function (req, res) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {
            Author: "hey que dicen los otros",
            Img: "https://media.giphy.com/media/4iBEbXGK03neo/giphy.gif",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            Title: "de prueba",
            Genre: "nooo"
        };
  dbo.collection("Albums").insertOne(myobj, function(err, result) {
    if (err) throw err;
    console.log("1 document inserted");
    res.json({result: "success"});
    db.close();
  });
});
});

//--------GET DE LA SHOP------
app.get('/shop', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("Albums").find({type: req.params.id}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(req.params.id);
      db.close();
    });
  });
});


app.post('/', (err, res) => {
	res.status(200);
	res.send('working');
	res.end();
});

app.use(router);

app.listen(8080, function(){
console.log('Back is running')
});
