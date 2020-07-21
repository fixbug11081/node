//es6:hint
require('DOTENV').config();
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

const posts = [
      {username:"jeet",title:"post 1"},
      {username:"ajeet",title:"post 2"},
      {username:"sjeet",title:"post 3"}
];

app.get('/posts',authenticationToken, (req, res) => {
      res.json(posts.filter(post => post.username === req.user.name));

});

app.post("/login", (req,res) => {
  const username = req.body.username;
  const user = {name:username};
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({accessToken :accessToken});
});

//Authorization
function authenticationToken(req, res, next){

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token === null ) res.writeHead(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
     if(err)  return res.sendStatus(403);
     console.log(user.name);
     req.user = user;
     next();
  });
}
app.listen(3000)
