
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
console.log(stripeSecretKey, stripePublicKey)
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
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

app.use( bodyParser.json() );
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }));
app.use(methodOverride());




//--------HOME GET------------
app.get('/', function(req, res) {
   res.send("Hello World!");
});
//-------------CART----------------
app.post('/cart', function(req, res) {
   MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("mydb");
     var payment = {
       Author: req.body.Author,
       Img: req.body.Img,
       Description: req.body.Description,
       Title: req.body.Title,
       Genre: req.body.Genre,
       Type: req.body.Type,
       Price: req.body.Price
     };
     dbo.collection("Payments").insertOne(payment, function(err, result) {
       if (err) throw err;
       console.log("1 document inserted");
       res.json({result: "success"});
       db.close()
});
});
});

app.get('/cart', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("Albums").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
      db.close();
    });
  });
});
app.get('/cart', function(req, res){
  fs.readFile('items.json', function(error){
    if(error) {
      res.status(500).end()
    } else {
   res.render('/cart', {
     stripePublicKey: stripePublicKey,
     items: JSON.parse(data)
   })
 }
})
})
  
app.get('/cart/:_id', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var albumid = req.params._id;
    dbo.collection("Albums").find(albumid).toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
      db.close();
    });
  });
});

//--------CONTACT POST-------------
app.post('/contact', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {
          Email: req.body.Email,
          Message: req.body.Message
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
/*app.post('/shop', function (req, res) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {
            Author: "hey que dicen los otros",
            Img: "https://media.giphy.com/media/4iBEbXGK03neo/giphy.gif",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            Title: "de prueba",
            Genre: "nooo",
            Type: "Drum kit"
        };
  dbo.collection("Albums").insertOne(myobj, function(err, result) {
    if (err) throw err;
    console.log("1 document inserted");
    res.json({result: "success"});
    db.close();
  });
});
});*/

//-------------SHOP-----------------
app.get('/shop', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("Albums").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
      db.close();
    });
  });
});
app.get('/shop/:_id', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("Albums").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
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
