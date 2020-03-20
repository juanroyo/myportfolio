
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
console.log(stripeSecretKey, stripePublicKey)
const express = require('express')
const app = express()
const readline = require('readline');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const stripe = require("stripe")("sk_test_qi9RJCWRFOU6Ry4X8m1kvNad002D09YcIO")
const { v4: uuidv4 } = require('uuid');
const cors = require("cors")
//const methodOverride = require("method-override");
const MongoClient = require('mongodb').MongoClient;


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
app.use(cors())
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());




//--------HOME GET------------
app.get('/', function(req, res) {
   res.send("Hello World!");
});
//-------------CART----------------

app.post("/cart", (req, res) => {

     const {product, token} = req.body;
     console.log("PRODUCT", product);
     console.log("PRICE", product.total);
     const idempontencyKey = uuidv4()

     return stripe.customers.create({
       //email: token.email,
       source: token.id,
     }).then(customer => {
       stripe.charges.create({
         amount: product.total * 100,
         currency: 'eur',
         customer: customer.id,
         //email: token.email,
         description: product.title
       }).catch(err => console.log(err))
     }).then(function sendEmail() {
       console.log("this is the function!")
      var bodyMessage = '<table>';
      var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ju.val.roy@gmail.com',
          pass: 'Manolito.1'
        }
      });
       var mailOptions = {
          from: 'ju.val.roy@gmail.com',
          to: 'juan-royo@hotmail.com',
          subject: 'Sending Email using Node.js',
          html: `<td><h1>thank for buying ${req.body.title} price ${req.body.total}</h1></td><td><p>That was easy!</p></td>`
        }
        mail.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

      }).then(result =>  res.status(200).json(result))


     .catch(err => console.log(err))
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
/*app.get('/cart', function(req, res){
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
})*/

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
