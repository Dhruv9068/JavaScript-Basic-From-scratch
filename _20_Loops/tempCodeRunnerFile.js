const arr = [1, 2, 3, 4, 5];
// Arrays
arr.forEach(function fun(element){
console.log(element);
});

//arrow fun

arr.forEach((element)=>{console.log(element)})

// in single line
arr.forEach((element)=>{process.stdout.write(element + ' ')})

// Arrays with Index
arr.forEach((element, index) => console.log(`Index: ${index}, Element: ${element}`));

arr.forEach((element, index, array) => console.log(`Index: ${index}, Element: ${element}, Array: ${array}`));
// NodeList (HTMLCollection) - replaced with an array of objects
const elements = [{ id: 1, tagName: 'div' }, { id: 2, tagName: 'div' }, { id: 3, tagName: 'div' }];
elements.forEach((element) => console.log(element));

// Maps
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
map.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

// Sets
const set = new Set([1, 2, 3, 4, 5]);
set.forEach((element) => console.log(element));

// TypedArrays
const uint8Array = new Uint8Array([1, 2, 3, 4, 5]);
uint8Array.forEach((element) => console.log(element));

// Objects (using Object.keys())
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => console.log(`Key: ${key}, Value: ${obj[key]}`));