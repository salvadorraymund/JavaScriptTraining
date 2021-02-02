let myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
let list = document.createElement("ul");

for(let f = 0; f < myArray.length; f++){
	if (f === 4){
		list.textContent += myArray[4] + ".";
	} else {
		list.textContent += myArray[f] + ", ";
	}
};



const section = document.querySelector(".preview");
section.appendChild(list);

//JSLoopExercise2

var contact = "Mustafa";
var phoneBook = [
	{name: "Chris", number: "1549"},
	{name: "Li Kang", number: "9634"},
	{name: "Anne", number: "9065"},
	{name: "Francesca", number: "3001"},
	{name: "Mustafa", number: "6888"},
	{name: "Tina", number: "4312"},
	{name: "Bert", number: "7780"},
	{name: "Jada", number: "2282"},
];

	
for(let p = 0; p <= phoneBook.length - 1; p++){
	if (phoneBook[p]["name"] !== contact) {
		continue;
	} else{
		let para = document.createElement("p");
		para.textContent += "This is the number of " + contact + " " + phoneBook[4].number + ".";
		const searchBox = document.querySelector(".searchBox");
		section.appendChild(para);
	}
};

//JSLoopExercise3
let graph = document.createElement('p');
const btn = document.querySelector("button");

function isPrime(num){
	for(let y = 2; y < num; y++){
		if(num % y === 0){
			return false;
		}
	}
	return num;
}

btn.addEventListener("click", function (){
	for(let n = 500; n >= 2; n--){
		let r = isPrime(n);
		if (r === false){
			continue;
		} else if (r === 2) {
			graph.textContent += r + ". ";
		} else {
			graph.textContent += r + ", ";
		}
	}
});


let primeNumber = document.getElementById("primeNumber");
primeNumber.appendChild(graph);

	




