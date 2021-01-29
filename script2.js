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
	// var allInterests = this.interests;
	//THIS IS THE SCRIPT I CODED FOR THIS PROBLEM
	// this.bio = function() {
	// 	gender === "male" || "female"
	// 	if (gender === "male"){
	// 		alert(this.name.first + " " + this.name.last + " is" + this.age + " years old. He likes " + allInterests + ".");		
	// 	} else {
	// 		alert(this.name.first + " " + this.name.last + " is" + this.age + " years old. She likes " + this.interests[0] + " and" + this.interests[1] + ".");
	// 	}
	// };
	//THIS IS THE SOLUTION FROM MDN
	this.bio = function(){
		var string = this.name.first + " " + this.name.last + " is " + this.age + " years old. ";
		var pronoun;
		if (this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M"){
			pronoun = "He likes ";
		} else if (this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F"){
			pronoun = "Shee likes ";
	    } else {
	    	pronoun = "They like ";
	    }
	    string += pronoun;
	// this.greeting = function() {
	// 	alert("Hi I'm " + this.name.first + ".");
	// };
	   if (this.interests.length === 1) {
		 string += this.interests[0] + ".";
	   } else if (this.interests.length === 2) {
		  string += this.interests[0] + " and" + this.interests[1] + ".";
	  } else {
		 for(var i = 0; i < this.interests.length; i++) {
			if (i === this.interests.length - 1) {
				string += "and " + this.interests[i] + ". "
			} else {
			string += this.interests[i] + ", ";
		}
	  } 
    }
  	alert(string);
  };
  this.greeting = function() {
  	alert("Hi! I'm " + this.name.first + ".");
  };
 };

let person3 = new Object({
	name: "Chris",
	age: 38,
	greeting: function(){
		alert("Hi! I'm " + this.name + ".");
	}
});


let person1 = new Person("Raymund", "Salvador", 32, "male", ["running", "biking", "working out", "cooking"]);
let person2 = new Person("Mela", "Babee", 31, "female", ["eating", "sleeping"]);

//OOJS Exercise 1
function Shape (name, sides, sideLength) {
	this.name = name;
	this.sides = sides;
	this.sideLength = sideLength;
	this.calcPerimeter = function(){
		var perimeter;
		perimeter = sides * sideLength;
		console.log(perimeter);
	} 
}

let Square = new Shape("square", 4, 5);
let Triangle = new Shape ("triangle", 3, 3);

//Classes
// Classes are a template for creating objects.

//Class declarations
class Rectangle{
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

//An importance difference between function declarations and class declarations is that functon declarations are hoisted and class declarations are not.
//You first need to declare your class and then access it

//Class Expressions
  //unnamed
let Rectangle1 = class {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle1.name);

//named
let Rectangle2 = class Rectangle3{
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle2.name)

//OOJS2
class Shape1{
	constructor(name, sides, sideLength){
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}
	//getter
	get perimeter(){
		return this.calcPerimeter();
	}
	//Method
	calcPerimeter() {
			return this.sides * this.sideLength;
		}
}

//OOJS3
// class Square5 extends Shape1{
// 	constructor
// 
class Square10 extends Shape1{
	constructor(name, sides, sideLength){
		super(name);
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}
	calcArea(){
		return this.sideLength*this.sideLength;
	}
}

let mySquare = new Square10("square", 4, 5);



	


