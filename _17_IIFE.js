
// lets try to run functional immediately 

//IIFE    Immediately invoked function expression 

// Ex

// Named IIFE
(function fun (){
    console.log("hello dhruv");
})();

( ()=>{
    console.log("Hello its IIFE we are using in Arrow function ")
})();

// IIFE syntax??

// (
//     function Your_fun (){}
// )()

// the above is the syntax 

// why we need IIFE?
// to prevent function get polluted by global objects or variables we use IIFE 

// Now what if we wan to pass parameters?

// Unnamed IIFE

( (name)=>{
    console.log(`Hello ${name}, its IIFE we are using in Arrow function `)
})('dhruv');
