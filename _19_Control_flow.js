const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// false values
// false, - , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0", "false", ' ', [], {}, function(){}

const userEmail = "dhrv@";

if (userEmail) {
    console.log("Got the user email");
    if (userEmail.search('@') !== -1) {
        console.log("Email is valid");
    } else {
        console.log("Email entered is invalid");
    }
} else {
    console.log("Email not received");
}

if (function() { return true; }()) {
    console.log("Function is truthy value");
}

// to check array
const arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}

// to check objects
const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

// Null coalescing operator (??)
let val1;
val1 = null ?? 10;
val1 = undefined ?? 15; 

console.log(val1);

// Use readline to prompt for user input
rl.question('Enter the month: ', (month) => {
    month = month.toLowerCase(); // Normalize input
    switch (month) {
        case 'jan':
            console.log("Hello there, explore the new year journey");
            break;  // Added break
        case 'feb':
            console.log("Happy birthday, Dhruv");
            break;  // Added break
        default:
            console.log("Month not recognized");
    }
    rl.close(); // Close the readline interface after input
});
