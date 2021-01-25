//OOP - using objects to model real world things that we want to represent inside our programs
// and or provide simple way to access functionality

//instatiation - the process of creating an object instance from a class
//object instances - onjects that contain the data and functionality defined in
// the class

function createNewPerson(name) {
	const obj = {};
	obj.name = name;
	obj.greeting = function() {
		alert("Hi I'm " + obj.name + ".");
	};
	return obj;
}

function Person(first, last, age, gender, interests) {
	this.name = {
		first: first,
		last: last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	var allInterests = this.interests;
	this.bio = function() {
		gender === "male" || "female"
		if (gender === "male"){
			alert(this.name.first + " " + this.name.last + " is" + this.age + " years old. He likes " + allInterests + ".");		
		} else {
			alert(this.name.first + " " + this.name.last + " is" + this.age + " years old. She likes " + this.interests[0] + " and" + this.interests[1] + ".");
		}
	};
	this.greeting = function() {
		alert("Hi I'm " + this.name.first + ".");
	};
}

let person1 = new Person("Raymund", "Salvador", 32, "male", ["running", "biking", "working out", "cooking"]);
let person2 = new Person("Mela", "Babee", 31, "female", ["eating", "sleeping"]);