
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/EmployeeDB';
MongoClient.connect("mongodb://localhost:27017/nodemongo",{useNewUrlParser: true, useUnifiedTopology: true},
function(err,db){
		if (err) throw err;
	    console.log("Database created!");
	    var dbo = db.db("EmployeeDB");
	    dbo.collection('Student', function (err, collection) {
	    if (err) throw err;
	    collection.insertMany([{ id: 1, firstName: 'Rommel', lastName: 'Galisanao' },
	    { id: 2, firstName: 'LiFu', lastName: 'Chen' },
	    { id: 3, firstName: 'Yong', lastName: 'Heng' },
	    { id: 3, firstName: 'Jan', lastName: 'Park' }]);
	    console.log("Record inserted");
	    db.close();
	   });
	}); 