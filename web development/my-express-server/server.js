//jshint esversion:6
const express = require('express');
const app = express();
app.get('/',function(request,response){
  response.send("<h1>Hello world</h1>");
  console.log(request);
})
app.get('/contact', function(req,res){
  res.send("Contact me ajeet@gmail.com");
});
app.get('/about',function(req,res){
  res.send("I am SSE");
})
app.listen(3000, function(){
  console.log('Sever has stated on 3000 port');
})
