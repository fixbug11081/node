var express = require('express');
var app = express();
app.set('viewengine','jade');
app.get('/',function(request,response){
	console.log('start the project');
});
app.listen(3000,function(){});



