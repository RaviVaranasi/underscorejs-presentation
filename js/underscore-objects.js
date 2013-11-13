var _ = require('./libs/underscore'); 

var DisneyCharacter = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};


var donald = new DisneyCharacter("Donald", "Duck");
var mickey = new DisneyCharacter("Mickey", "Mouse");
var buzz = new DisneyCharacter("Buzz", "Lightyear");


console.log('keys:' + _.keys(donald));
console.log('values:' + _.values(mickey));
console.log('pairs:' + _.pairs(donald)[0]);



var newBuzz = _.extend(buzz, {movie: "toy story"});
console.log("New Buzz %j", newBuzz);
console.log("Old Buzz %j", buzz);
console.log("Movie: %j", _.pick(buzz, 'movie'));
console.log("isMovieCharacter: %j", _.has(donald, 'movie'));

// ADD FUNCTIONS DYNAMICALLY

DisneyCharacter.prototype.fullName = function(){
	return firstName + " " + lastName;
};

var peterpan = new DisneyCharacter('Peter', 'Pan');
var captainCook = new DisneyCharacter('Captain', 'Cook');

var doBadThings = function() {
	console.log("Did bad things");
};

_.extend(captainCook, {doBadThings: doBadThings});
captainCook.doBadThings();
console.log("Functions %j", _.functions(peterpan));

console.log("isArray:" + _.isArray(peterpan));
console.log("isArray:" + _.isObject(peterpan));
console.log("isArray:" + _.isArray([peterpan, captainCook]));


// tap

