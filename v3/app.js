
// Fonction utilitaire
function log(text) {
	console.log(text);
}

//Definition des classes
function Person(name) {
	this.name = name;

	this.talk = function() {
		var argsArray = [].slice.call(arguments);
		log(this.name + ' says hello to:' + argsArray.toString());
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
		saved.apply(talker,arguments);
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
	talker.talk('bob','jane','john');
}