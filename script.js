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


var number1 = 40;
var number2 = 51;
var sum1 = number1 + number2;

if ((number1 == 100 || number2 == 100) || (sum1 >= 100)){
	console.log("true");
} else {
	console.log("false");
};




 