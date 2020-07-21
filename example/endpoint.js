var express=require('express');
var app = express();
app.set('viewengine','jade');
app.route('/Node').get(function(req,res){
	res.send("Tutorial on node");
});

app.route('/Angular').get(function(req,res){
	res.send('Tutorial on angular');
});
app.get('/',function(req,res){
	res.render('index',{title:'guru99', message:'Welcome'});

});


var server = app.listen(5000);