var tutorial = require('./Addition');
exports.NodeTutorial=function(){
	console.log("Node tutorial ");
	this.ptutor = function(){
		var ptutor=tutorial;
		ptutor.tutorial();
	}
}