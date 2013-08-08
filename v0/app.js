// Fonction utilitaire
function log(text){
	console.log(text);
}

// Methode qui sera modifiee
function sayHello(){
	log('hello');
}

// On garde en mémoire
var savedFunc = sayHello;

// On redefinit la fonction
sayHello = function(){

	// On ajoute un comportement
	log('sayHello start');

	// On remet le comportement d'origine
	savedFunc();
}

sayHello();