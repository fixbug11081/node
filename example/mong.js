var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/EmployeeDB';
MongoClient.connect("mongodb://localhost:27017/nodemongo",{useNewUrlParser: true, useUnifiedTopology: true},
function(err,db){

    var cursor = db.collection('EmployeeDB').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 