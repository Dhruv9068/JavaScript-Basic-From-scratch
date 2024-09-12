

// In js arrays can hold multiple type of elements
// can be resizable 


const arr = [1,2,3,4,5];

const NumArr = new Array();
NumArr.push(1,2,3,4,5);
console.log(NumArr);
console.log(NumArr.length);
console.log(NumArr[0]);
console.log(NumArr.concat(arr));
console.log(NumArr.indexOf(3));
arr.unshift(0)
console.log(arr);
console.log(NumArr.includes(1));

console.log(typeof NumArr.join());  // convert  the array into string


// Slice and Splice
console.log("A " , arr);
const n= arr.slice(1,3);
console.log(n);

console.log("B ", arr);   // array not changes
const m = arr.splice(1,3);
console.log(arr); // Array changes because of splice operation
console.log(m);   // includes the third element also 


const Marvel_Hero= ['Spiderman', 'Hulk','Deadpool', 'Thor'];
const Indian_Hero=['ShaktiMan','Hero', 'Shakalaka Boom Boom', 'Son Pari', 'Hakim'];

const AllHeros= [...Marvel_Hero , ...Indian_Hero];
console.log(AllHeros)

const another_array = [1,2,3,4,5,[6,7,8],[9,10,[11,12,13]]];
const real_another_Array = another_array.flat(3);   // or use infinity in args
console.log(real_another_Array);


console.log(Array.isArray("dhruv"));
console.log(Array.from("dhruv"));  // make a array of this 1


console.log(Array.from({name:"hitesh"}));   // we should specify what we want in array keys or values

let score1 =100;
let score2=200;
let score3 =300;
console.log(Array.of(score1, score2 , score3));  // give array of diff values