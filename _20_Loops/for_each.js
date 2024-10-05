const arr = [1, 2, 3, 4, 5];
// Arrays
arr.forEach(function fun(element){
console.log(element);
});

//arrow fun

arr.forEach((element)=>{console.log(element)})

console.log("\nSingle line: \n")
// in single line
arr.forEach((element)=>{process.stdout.write(element + ' ')})
console.log("\n")

// Arrays with Index
// second parameter represent index of array
arr.forEach((element, index) => console.log(`Index: ${index}, Element: ${element}`));
// third parameter represent array itself
// there is no fourth param

arr.forEach((element, index, array) => console.log(`Index: ${index}, Element: ${element}, Array: ${array}`));
// NodeList (HTMLCollection) - replaced with an array of objects
const elements = [
     { id: 1, tagName: 'div' },
     { id: 2, tagName: 'div' }, 
     { id: 3, tagName: 'div' }];
elements.forEach((element,index) => console.log(element, element.id));

// Maps
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
map.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

// Sets
const set = new Set([1, 2, 3, 4, 5]);
set.forEach((element) => console.log(element));

// TypedArrays
const uint8Array = new Uint8Array([1, 2, 3, 4, 5]);
uint8Array.forEach((element) => console.log(element));
// A Typed Array is a type of array in JavaScript that provides a way to work with binary data in a more efficient and flexible way. It is a part of the ECMAScript 2015 (ES6) standard
//
/*
      Typed Arrays are similar to regular arrays, but they have some key differences:
=Binary data: Typed Arrays are designed to work with binary data, such as images, audio, and video. They can store data in a compact, binary format, which makes them more efficient than regular arrays.
=Fixed-size elements: Each element in a Typed Array has a fixed size, which is specified when the array is created. This makes it possible to perform operations on the data more efficiently.
=Typed elements: Each element in a Typed Array has a specific type, such as Int8, Uint8, Int16, Uint16, Int32, Uint32, Float32, or Float64. This makes it possible to perform type-specific operations on the data.

*/

// Objects (using Object.keys())
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => console.log(`Key: ${key}, Value: ${obj[key]}`));