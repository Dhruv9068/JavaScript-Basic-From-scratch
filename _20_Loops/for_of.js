// Arrays
const arr = [1, 2, 3, 4, 5];
console.log("Arrays:");
for (const element of arr) {
  console.log(element);
}

// Strings
const str = 'hello';
console.log("\nStrings:");
for (const char of str) {
  console.log(char);
}

// Sets
const set = new Set([1, 2, 3, 4, 5]);
console.log("\nSets:");
for (const value of set) {
  console.log(value);
}

// Maps
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log("\nMaps:");
for (const [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// NodeLists (e.g., HTMLCollection)
// const elements = document.querySelectorAll('div');
// console.log("\nNodeLists:");
// for (const element of elements) {
//   console.log(element);
// }

// Arguments object (in a function)
function foo() {
  console.log("\nArguments object:");
  for (const arg of arguments) {
    console.log(arg);
  }
}
foo(1, 2, 3, 4, 5);

// Generator objects
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
console.log("\nGenerator objects:");
for (const value of generator()) {
  console.log(value);
}

// Async generators (with for await...of loop)
async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
async function main() {
  console.log("\nAsync generators:");
  for await (const value of asyncGenerator()) {
    console.log(value);
  }
}
main();