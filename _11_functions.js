

function function_name (){
   console.log("Hello");
}

function_name();
function_name   // this is just a reference of function 


function addTwoNum (a , b){
    return a+b;
}

console.log(addTwoNum(4,5));
console.log(addTwoNum(4,"a"));
console.log(addTwoNum(4,null));

// here we need to use if else 

function addTwoNumbersOnly (a , b){
    if(typeof a =="number" && typeof b =="number"){
    return a+b;
    }
    else
    throw new Error("You passed wrong arguments, pass only numbers");
}
console.log(addTwoNumbersOnly(1,2));
// console.log(addTwoNumbersOnly(1,"a"));   throw error 
console.log(addTwoNumbersOnly(1,2));

function loginuser(username){
    return `${username} just logged in`
}
console.log(loginuser("dhruv"));
console.log(loginuser());   // it gives undefined 

// how to handle undefined?


function loginuser2(username ){

    return  username!=undefined?`${username} just logged in`:'enter arguments';
}

console.log(loginuser2());
console.log(loginuser2("dhruv"));