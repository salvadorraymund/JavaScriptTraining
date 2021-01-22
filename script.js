var date = new Date();
	document.body.innerHTML = "<h1>Today is " +date+ "</h1>"

var a = 4;
var b = "ducks";
var sum = a + b;

var humanSum = "The value of a: " + a + ". The value of b: " + b + ". The sum of a and b: " + sum + ". ";
console. log(humanSum);

var x = 5;
var y = 4;
var theNumbersMatch;

if ( x==y ) {
	theNumbersMatch = true;
} else {
	theNumbersMatch = false;
}

document.body.innerHTML = "<h1>The numbers match: " + theNumbersMatch +"</h1>"

var age = 21;
if (age >= 18) {
	console.log("You are an adult!");
} else {
	console.log("You are a kid");
}

//Ternary codes

// condition ? exper 1 : exper 2

console.log((age >= 21) ? "You are old!" : "You are young");

var stop;

age > 18 ?(
 console.log("Ok, you can go."),
 stop = false
) : (
 console.log("Sorry, you are much too young!"),
 stop = true
 );

var firstCheck = false,
    secondCheck = true,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

    console.log(access);



//Array
var pens;
pens = ["red", "blue", "yellow", "orange"];

console.log(pens);

var firstPen = pens[1];

console.log(firstPen);

//Arrays and Properties
console.log("Before: ", pens);

//PROPERTIES
//Get a property of an object by name:
// console.log("Array length: ", pens.length);

//Methods
//Reverse the array:
// pens.reverse ();

//Remove the first value of the array
// pens.shift();

//Add comma-separated list of values to the front of the array
// pens.unshift("purple", "black");

//Remove the last value of the array:
//pens.pop();

// var newPens = pens.slice();
// console.log("New pens: ", newPens);

// console.log("After: ", pens);

var arrayString = pens.join(", ");
console.log("String from array: ", arrayString);


var number1 = 0;
var number2 = 1;
var sum1 = number1 + number2;

if ((number1 && number2 == 100) || (sum1 >= 100)){
	console.log("true");
} else {
	console.log("false");
};


//Functions

function multiply() {
	var result = 3 * 4;
	console.log("3 multiplied by 4 is ", result);
}
multiply();

function findBiggestFraction(a,b) {
	var result;
	a >b ? result = ["firstFraction", a] : result = ["secondFraction", b];
	return result;
}

var firstFraction = 5/7;
var secondFraction = 3/4;

findBiggestFraction(firstFraction, secondFraction);
// findBiggestFraction(7/16, 13/25);
var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log(fractionResult);

//anonymous function

var a = 5/7; //global function
var b = 18/25;

var theBiggest = (function() {
	var result; //local function
	a > b ? result = ["a", a] : result = ["b", b];
	console.log (result);
})(a,b);

console.log(theBiggest);

//global variable - declared before function
//local variable - declared within a function; works only when called within function

//const (constant) - cant be changed once defined
//let - smaller scope than var; block scope variable

const myConstant = 5;
console.log(myConstant);

function logScope() {
	let localVar = 2;

	if (localVar){
		let localVar = "I'm different!";
		console.log("nested localVar: ", localVar);
	}
	console.log("logScope localVar: ", localVar);
}

 logScope();

 //Objects

//  var course = new Object();

//  // course.title = "JS Training";
//  // course.instructor = "Morten";
//  // course.level = "1";
//  // course.published = "true";

 var  course = {
 	title : "JS Training",
 	instructor : "Morten",
 	level : "1",
 	published : "true",
 	views: 0,
 	updateViews: function() {
 		return ++course.views;
 	}
 }



function Course(title, instructor, level, published, views) {
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function () {
		return ++this.views;
	};
}

var courses = [
	new Course("JS Training", "Morten", "1", "true", "0"),
	new Course("JS Advanced", "Raymund", "2", "true", "12"),
];

// var course01 = new Course("JS Training", "Morten", "1", "true", "0");
// var course02 = new Course("JS Advanced", "Raymund", "2", "true", "12");

console.log(courses);
console.log(courses[1].instructor); //accessing a property
console.log(courses[1].updateViews()); //using a method in the object
console.log(courses[0].title); //dot notation
console.log(courses[0]["level"]); //bracket notation

//Closures - a function within a function that relies in the variables of the outside function to work
function doSomeMatch() {
	var a = 5;
	var b = 4;

	function multiply(){
		var result = a*b;
		return result;
	}
	// var sum = a + b;

	// return sum;
	return multiply;
}

var theResult = doSomeMatch();

console.log("The result is: ", theResult());


function giveMeEms(pixels) {
	var baseValue = 16;

	function dotheMath() {
		return pixels/baseValue;
	}
	return dotheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(30);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("large size: ", largeSize());
console.log("Extra large size: ", xlargeSize());

function power(base){
	return function(exp) {
		return (base**exp);
	};
}

var var1 = power(2);
var var2 = power(3);

console.log(var1(4));


function myfunc(x,y) {
	return (x+y);
}
console.log(myfunc(2,myfunc(5,-2)));

function perimeter(w,l){
	var p = 2*(w+l);
	return p;
}

var width = 3, length = 2;
console.log(width);
console.log(length);
var per = perimeter(width, length);

console.log("The perimeter is: ", per);

function log(nameOfScientist){
	console.log(nameOfScientist);
}

var scientist = "Ken Thompson";
var log1 = log(scientist);

function shout(word){
	let salita = word;
	var result = salita + salita;
	console.log(result);
	return result;
};


function double(name) {
  return name + ' and ' + name;
}

let r = double('Roy');
console.log(r);

function heart(string){
	var charnumber = string.length;
	console.log(charnumber); 
	return charnumber;
};

var s = heart("spinach");
console.log(s);

function toCase(string){
	var town = string.toLowerCase();
	var output = string.toUpperCase();
	return(town + "-" + output);
};

var shut = toCase("shut");
console.log(shut);


