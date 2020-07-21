//jshint esversion:6

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/',function(req,res){

  const query = req.body.cityInput;
  const apiKey = "31d370ff536898a4e0b3fa09c03e7cff";
  const unit="metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;

  https.get(url, function(response){

    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const desc = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<p>The weather currently is : "+desc+"</p>");
        res.write("<h1>The temprature in "+query+"  is : "+temp+" Degree Celsius.<h1>");
        res.write("<img src="+imageUrl+">");
        res.send();
    });

  });
});

app.listen(3000,function(req,res){
  console.log('Server has started running on port 3000');
});
