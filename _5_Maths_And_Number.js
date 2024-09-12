//++++++++++++++++++++++ Numbers  ++++++++++++++++++++++++++++++++++++++

let balance = new Number(500.55);

// console.log(balance);
// console.log(typeof balance);
// console.log(typeof balance.toString().concat(100));
// console.log( balance.toFixed());
// console.log( balance.toPrecision(4));
// console.log( balance.valueOf());
// const n= 1000000;
// console.log(n.toLocaleString('en-UK'));
// console.log(n.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.EPSILON);

//++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++

// console.log(Math.max(4,5));
// console.log(Math.min(4,5));
// console.log(Math.floor(4.2));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.sqrt(4));
// console.log(Math.pow(4,2));
// console.log(Math.PI);


//++++++++++++++++++++++++Math. random++++++++++++++++++++
console.log(Math.random()); // the output will come in range b/w 0 to 1 always

// now what if i have range , like for ludo game we have range 1 to 6 right?
console.log(Math.floor ((Math.random()*10)+1));


// now with range 
let min =10;
let max=20;
console.log(Math.floor((Math.random()*(max-min+1))+ min));   // formula to get the random values in range