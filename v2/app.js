
// Fonction utilitaire
function log(text) {
	console.log(text);
}

//Definition des classes
function Person(name) {
	this.name = name;

	this.talk = function() {
		log(this.name + ' says hello ');;
	}
}

function Cat(name) {
	this.name = name;

	this.talk = function() {
		log(this.name + ' says miaow ');
	}
}

// Factory
function getTalker(type, name) {
	var talker,saved;

	switch (type) {
		case 'person':
			talker = new Person(name);
			break;
		case 'cat':
			talker = new Cat(name);
			break;
		default:
			throw 'unknow type:' + type;
	}

	//code ajouté
	saved = talker.talk;
	talker.talk = function(){
		log('before');
		//saved(); Passe un mauvaise contexte dans this
		saved.apply(talker);
	}
	//fin code ajouté

	return talker;
}

// Test 
var talkers = new Array();
talkers.push(getTalker('person', 'nico'));
talkers.push(getTalker('person', 'marie'));
talkers.push(getTalker('cat', 'ficelle'));

var i, talker, voice;
for (i = 0; i < talkers.length; i++) {
	talker = talkers[i];
	talker.talk();
}