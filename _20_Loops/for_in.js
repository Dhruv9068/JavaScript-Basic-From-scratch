// Objects
const obj = { a: 1, b: 2, c: 3 };
console.log("Objects:");
// Using for...in loop to iterate over object properties
for (const key in obj) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// Arrays (note: not recommended, use for...of instead)
const arr = [1, 2, 3, 4, 5];
console.log("\nArrays:");
// Using for...in loop to iterate over array indices
for (const index in arr) {
  console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// Strings (note: not recommended, use for...of instead)
const str = 'hello';
console.log("\nStrings:");
// Using for...in loop to iterate over string characters
for (const index in str) {
  console.log(`Index: ${index}, Character: ${str[index]}`);
}

// NodeLists (e.g., HTMLCollection)
const elements = document.querySelectorAll('div');
console.log("\nNodeLists:");
// Using for...in loop to iterate over NodeList elements
for (const index in elements) {
  console.log(`Index: ${index}, Element: ${elements[index]}`);
}

// Arguments object (in a function)
function foo() {
  console.log("\nArguments object:");
  // Using for...in loop to iterate over function arguments
  for (const index in arguments) {
    console.log(`Index: ${index}, Argument: ${arguments[index]}`);
  }
}
foo(1, 2, 3, 4, 5);

// Note: `for...in` loops are not suitable for Sets, Maps, Generator objects, or Async generators,
// as they do not have enumerable properties.

// Instead, use `for...of` loops for these types of objects, as shown in the previous example.

