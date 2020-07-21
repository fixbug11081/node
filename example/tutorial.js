var tutorial = require('./Addition');

tutorial.tutorial("ajeet nath goswami");

exports.NodeTutorial=function(){
	console.log("Node tutorial ");
	function ptutor(){
		var ptutor =tutorial;
		ptutor.tutorial();
	}
}

