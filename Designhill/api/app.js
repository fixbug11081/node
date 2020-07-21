//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

app = express();

app.get('/',function(req,res){
   res.sendFile(__dirname+"/product.json");
});

//Storing products
app.post('/',function(req,res){
  var   productFile = fs.readFile(__dirname+"/product.json");
  var   url = "mongodb://localhost:27017/productdb";
  MongoClient.connect(url,function(err, db){
    if(err){
      console.log('err occured');
    }else{
      var databaseObject = db.db('productdb');
      dbo.collection("product").insertOne(productFile);
      console.log("Product record inserted");
      dbo.close();
    }
  });
});
//Listing of products API
app.get('/list-products',function(req,res){
  var   url = "mongodb://localhost:27017/productdb";
  MongoClient.connect(url,function(err, db){
    if(err){
      console.log('err occured');
    }else{
      var databaseObject = db.db('productdb');
      dbo.collection("product").find();
      console.log("List of products record");
      dbo.close();
    }
  });
});




app.listen(3000,function(req,res){
  console.log("Server is running");
});
