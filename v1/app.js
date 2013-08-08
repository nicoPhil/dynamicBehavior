// Fonction utilitaire
function log(text){
	console.log(text);
}


function sayHello(name){
	log('hello ' + name);
}


var savedFunc = sayHello;

sayHello = function(name){
	name = name || 'Monsieur X';
	savedFunc(name);
}

sayHello('nico');
sayHello();