
// Now decelaration of arrow functions 

const fun = () =>{
    let username ="dhruv"
    console.log(this);
} 

fun();

const addTwoNumber =(a, b)=>{
    return a+b;
}
console.log(addTwoNumber(5,6));

// implicit return using arrow function 

const addTwoNumberImp =(a,b) => a+b;
console.log(addTwoNumberImp(5,6));   // same output 

// or use 
const addTwo =(a,b) => (a+b);   // but if we use {} return is compulsory 
console.log(addTwo(5,6));