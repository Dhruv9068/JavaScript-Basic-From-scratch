


// objects in js can store the data in key values pair 

// singleton 



// object leterals

let mySym = Symbol();
let myObj = {
    Name:"Dhruv", 
    id: 5,
    "address" : "Mathura, UP , India",
    [mySym] : "Dc",
   
    
}

console.log(myObj);
console.log(myObj.Name);
console.log(myObj["address"]);
console.log(myObj["Name"]);
console.log(typeof myObj[mySym]);

myObj.greeting = function() {
    console.log("hello its dhruv");
  }

myObj.greetingTwo = function() {
    console.log(`hello its ${this.Name}`);
  }

myObj.greeting();
myObj.greetingTwo();