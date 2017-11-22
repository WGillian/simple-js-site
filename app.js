// Check the console inside chrome developer tools to see me running

console.log("Hello I'm running")

var firstName = "Gillian";
var lastName = "Whitehead";
console.log(firstName+" "+lastName);

console.log(lastName+", "+firstName);

console.log("Number of letters in "+firstName+": "+firstName.length);

var people = ['Jack', 'John', 'James'];
people.map(function (names){console.log(names);});

var namesListed = function (names){
	var list = "";
	for(var i = 0; i < names.length; i++){
	list += names[i]+"\n";	
	}
	return list;
};

console.log(namesListed(people));





var removeFirstLetter = function (name){
	return name.slice(1, name.length);
};

console.log(removeFirstLetter(people[0]));





var removeFirstLetterIfJ = function (name){
	if(name.slice(0, 1) === "J"){
	return name.slice(1, name.length);
	} else {
	return name
	};
};

console.log(removeFirstLetterIfJ(people[1]));




var task8 = function (name){
	if(name.slice(0, 1) === "J"){
	return name.slice(1, name.length);
	} else if (name.slice(0, 1) === "R"){
	return name.slice(0, name.length-2);
	} else {
	return name;
	};
};

console.log(task8("Rupert"));













