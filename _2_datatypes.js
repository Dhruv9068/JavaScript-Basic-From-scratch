/*
In JS there are multiple types of data types

There are basically two types of data types 

Primitive data type
non primitive 


divided on the basis of how it stored in memory and how they are accessed


*/




//comparision of datatypes


console.log("2">1);        
console.log("02">1);


console.log(null>0); 
console.log(null==0);   
console.log(null>=0);      // it convert null into 0

// note don't compare the two different datatypes


// ====     it checks datatypes as well

console.log("2"===2);  // because two diff datatypes are there





// lets take some examples of data  types

// primitive dt
let str = "hello";
const big_number = 324244354354353453n;
console.log(typeof big_number)
let integer_num = 545;
let boolean_num = false;
let id = Symbol("123")
let another_id = Symbol("123")
console.log(id==another_id)  // both symbol are different

// non primitive dt

// objects , fun , arrays


let arr = ["hello", "Hi", "Dhruv"]

let myObj = {
    id:533,
    name:"Dhruv",
    age:21,
}

console.log(arr)
console.log(myObj)
const myFun = function(){
    console.log("Hello world");
}


myFun()

console.log(typeof myFun)   // type of function == function 
