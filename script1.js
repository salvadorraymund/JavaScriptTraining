const person = {
	name: ['Bob', 'Smith'],
	age: 32,
	gender: 'male',
	interests: ['music', 'skiing'],
	bio: function() {
		alert(this.name[0] + ' ' + this.name[1] + ' is' + this.age +' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
	},
	greeting: function(){
		alert('Hi! I\'m' + this.name[0] + '.');
	}
};

let myDataName = 'height';
let myDataValue = '1.75';
person[myDataName] = myDataValue;

//this keyword refers to the current object the code is being written inside
//example: this.name - this is equivalent to object "person"

const person1 = {
	name: 'Chris',
	greeting: function() {
		alert('Hi! I\'m' + this.name + ' .');
	}
}

const person2 = {
	name: 'Deepti',
	greeting: function() {
		alert('Hi! I\'m' + this.name + ' .');
	}
}

//the code above shows how this works. even though the code's the same, the functions alerted different first names.
//this is equal to the object the code is inside

const myNotification = new Notification('Hello!');




var bandInfo;

bandInfo = {
 name: 'The Hamburgers',
 nationality: 'Filipino',
 genre: 'Pop/Rock',
 members: ['Ebe Dancel', 'Jay', 'Chito', 'Yano'],
 formed: '1994',
 split: false,
 albums: ['The Hamburgers', 'Tugtugan Na', 'HaleHaleHoy!'],
};

person.greeting = function (){
	console.log('Hello World!');
};

let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

cat.greeting = function(){
 console.log("Hello, said " + this.name + " the " + this.breed + ".")
}

let cat2 = {
  name : 'Joan',
  breed : 'Persian',
  color : 'grey',
  greeting: function() {
    console.log("Hello, said " + this.name + " the " + this.breed + ".");
  }
}