var _ = require('./libs/underscore');


var wallModels = [
	{
		startX: 20, startY: 18, 
		endX: 92, endY: 18, 
		wallId: 'A'
	},
    {
    	startX: 92, startY: 18, 
    	endX: 92, endY: 54, 
    	wallId: 'B'
    },
	{
		startX: 92, startY: 54, 
		endX: 20, endY: 54, 
		wallId: 'C',
		doors :[{
			doorType: 'standard',
			isPrimary: true
		}]
	},
	{
		startX: 20, startY: 54, 
		endX: 20, endY: 18, 
		wallId: 'D',
		doors :[{
			doorType: 'standard',
			isPrimary: false
		}]
	}
];





// GET THE PRIMARY door
var allDoorsIncludesNull = _.map(wallModels, function(wallModel){
	return wallModel.doors;
});
var allDoors =  _.compact(_.flatten(allDoorsIncludesNull));
console.log('all doors %j', allDoors);
var primaryDoor = _.findWhere(allDoors, {isPrimary: true});
console.log('primary door %j', primaryDoor);










//REFACTOR start
var doorModels = function(wallModel){
	return wallModel.doors;
};
var isPrimary = function(door){
	return door.isPrimary;
};
console.log(_.chain(wallModels)
	.map(doorModels)
	.flatten()
	.compact()
	// .tap(console.log)
	.filter(isPrimary)
	.value());

// REFACTOR: END

// WHY UNDERSCORE is not pure functional library ??

// var allDoorsComposition = _.compose(_.compact, _.flatten, _.map(doorModels));
// console.log(allDoorsComposition(wallModels));