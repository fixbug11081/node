var exports = module.exports = {};

exports.AddNumber = function(a,b){
	return a+b;
};


var addition = require("./Addition.js");
console.log(addition.AddNumber(1,2));


exports.tutorial = function(){

	console.log('Guru 9');
};