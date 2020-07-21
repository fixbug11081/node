//jshint esversion:6
const express = require("express");
const router = express.Router();

router.get("/",function(req,res,next){
 res.sendFile(__dirname+"/product.json");
});

module.exports = router;
