// ok lets try string in javascript


let name = "dhruv";
// name is a string 

// now lets try something here

// how to concatenate name with something
// basic method using + ?
// lets try $ symbol

console.log(`Hello my name is ${"dhruv"}`);

// let create a string using objects

let strObj = new String ('hello');

console.log("Type of  strobj is " ,typeof strObj);

console.log(strObj instanceof String); // true

console.log(strObj.length);
console.log(strObj.toString());
console.log(strObj.toUpperCase());




//In JavaScript, every object has a prototype, 
// which is an object that serves as a template for creating new objects. 

function Animal(name) {
    this.name = name;
  }

  Animal.prototype.sound = function() {
    console.log("The animal makes a sound.");
  };

  let dog = new Animal("Fido");
  dog.sound(); // Output: The animal makes a sound.