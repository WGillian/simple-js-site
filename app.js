// Check the console inside chrome developer tools to see me running

console.log("Hello I'm running")

var firstName = "Gillian";
var lastName = "Whitehead";
console.log(firstName+" "+lastName);



function firstNameLastName (firstName, lastName){
	return firstName+" "+lastName;
}
console.log(firstNameLastName(firstName, lastName));



function lastNameFirstName (firstName, lastName){
	return lastName+", "+firstName;
}
console.log(lastNameFirstName(firstName, lastName));


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




var newPeople = ['Lucy', 'Jack', 'Roger', 'Jacob', 'Roxanne', 'James', 'Juliette', 'Jerome', 'Jessica', 'Rosa', 'Greg'];


var removeFirstLetter = function (names){
	var list = "";
	for(var i = 0; i < names.length; i++){
	list += names[i].slice(1, names.length)+"\n";
	}
	return list;
};

console.log(removeFirstLetter(newPeople));




var removeFirstLetterIfJ = function (names){
	var list = "";
	for(var i = 0; i < names.length; i++){
		if(names[i].slice(0, 1) === "J"){
		list += names[i].slice(1, names.length)+"\n";
		} else {
		list += names[i]+"\n";
		}
	};
	return list;
	
};

console.log(removeFirstLetterIfJ(newPeople));






var task8 = function (names){
	var list = "";
	for(var i = 0; i < names.length; i++){
		if(names[i].slice(0, 1) === "J"){
		list += names[i].slice(1, names[i].length)+"\n";
		} else if (names[i].slice(0, 1) === "R"){
		list += names[i].slice(0, names[i].length-2)+"\n";
		} else {
		list += names[i]+"\n";
		}
	};
	return list;
	
};

console.log(task8(newPeople));





var johnsTask = function (names){
	var list = [];
	for(var i = 0; i < names.length; i++){
		if(names[i].slice(0, 1) === "J"){
		list.push(names[i].slice(1, names[i].length));
		} else if (names[i].slice(0, 1) === "R"){
		list.push(names[i].slice(0, names[i].length-2));
		} else {
		list.push(names[i]);
		}
	};
	return list;
	
};

var newArray = johnsTask(newPeople);

newArray.forEach(function (names){console.log(names);});






var map = newPeople.map(function (names){
		if(names.slice(0, 1) === "J"){
		return names.slice(1, names.length);
		} else if (names.slice(0, 1) === "R"){
		return names.slice(0, names.length-2);
		} else {
		return names;
		}
		}
);


map.forEach(function (names){console.log(names);});








