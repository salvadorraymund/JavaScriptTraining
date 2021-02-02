//For Loop
// for(initializer; condition;final expression){
 	//code to run
// }
//initializer - this is usually a variable set to a number, which is incremented to count the number of times the loop has run. aka count variable
//condition - defines when the loop should stop
//final expression - evaluated or run each time a loop has gone through a full iteration. serves to either increment or decrement, until the condition is no loger true

const cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
let info = "My cats are called ";
const para = document.querySelector('p');

// for (let i = 0; i < cats.length; i++){
// 	if (i <= 3){
// 		info += cats[i] + ", ";
// 	} else {
// 		info += cats[i] + ". ";
// 	}
// }

let i = 0;
do {
	if (i === cats.length - 1) {
		info += "and " +cats[i] + ".";
	} else {
		info += cats[i] + ", ";
	}
	i++;
} while (i < cats.length);

para.textContent = info;

//break statements will immediately exit the loop and make the browser move on to any code that follows it
const contacts = ['Mela:22332322', 'Raymund:345456', 'Dokie:7654322', 'Mary:9998769', 'Dianne:9384875'];
const para1 = document.getElementById('contactExample');
const input = document.getElementById('inputContacts');
const btn = document.getElementById('inputContacts');

btn.addEventListener('click', function() {
	let searchName = input.value.toLowerCase();
	input.value = ' ';
	input.focus();
	for (let i = 0; i < contacts.length; i++){
		let splitContact = contacts[i].split(":");
		if (splitContact[0].toLowerCase() === searchName) {
			para1.textContent = splitContact[0] + "'s number is " + splitContact[1]+ ".";
			break;
		} else {
			para1.textContent = "Contact not found";
		}
	}
});

//continue statements - skips to the next iteration of the loop
const input1 = document.getElementById("numberExample");
const btn1 = document.getElementById('numberButton2');
const para2 = document.getElementById('numberPara');

btn1.addEventListener('click', function(){
	let num = input1.value;
    for (let i = 1; i <= num; i++) {
	 let sqRoot = Math.sqrt(i); //check whether the square root is an integer by testing whether it is the same as itself when rounded down to the nearest integer
	  if (Math.floor(sqRoot) !== sqRoot) {
		continue;
	}
	para2.textContent += i + " ";
}
});

//While loop
// initializer
// while (condition) {
// 	code to run
// 	final expression
// }

// let i = 0;
// while (i < cats.length){
// 	if (i === cats.length - 1) {
// 		info += "and " + cats[i] + ".";
// 	} else {
// 		info += cats[i] + ", ";
// 	}
// 	i++;
// }

// para.textContent = info;

//Do-While Loop - conditions comes after anything else. the code inside the curly braces is always run once before the check
// initializer
// do{
// 	code to run
// 	final expression
// } while(condition)

//ActiveLearning1

const output = document.querySelector(".output");
const btn10 = document.getElementById("launchButton");
output.innerHTML = "";

btn10.addEventListener("click", function(){
	let i = 10;
	do {
        let para = document.createElement('p');
		if (i === 10){
		para.textContent = "Countdown " + i;
	 	} else if (i === 0){
	 		para.textContent = "Blast off!!";
	 	} else {
	 		para.textContent = i;
	 	}
		output.appendChild(para);
		i--;
	 } while(i >= 0);
	// for(let i = 10; i >=  0; i--) {
	// 	if (i === 10){
	// 		let para = document.createElement('p');
	// 		para.textContent = "Countdown " + i;
	// 		output.appendChild(para);
	// 	} else if (i === 0){
	// 		para.textContent = "Blast off!!";
	// 		output.appendChild(para);
	// 	} else {
	// 		para.textContent = i;
	// 		output.appendChild(para);
	// 	}
		
	// }
});

//ActiveLearning2

const guests = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];
const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let o = 0;
while(o < guests.length){
	if (o === 4) {
		refused.textContent += guests[4] + " and ";
	} else if (o === 5) {
		refused.textContent += guests[5] + " ";
	}	else {
		if (o === 8){
			admitted.textContent += guests[o] + " ";
	} else {
		admitted.textContent += guests[o] + ", ";
	}
}
	o++;
};
