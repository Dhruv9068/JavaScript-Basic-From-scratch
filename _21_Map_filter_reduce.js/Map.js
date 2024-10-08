// What is map()?
// The map() method creates a new array with the results of applying the provided function on every element in the calling array.

// Comparison with for loop, for each, and filter
// for loop: used for iterating over an array and performing some action on each element
// for each: similar to for loop, but provides a more concise way of iterating over an array
// filter: used for creating a new array with all elements that pass the test implemented by the provided function
// map: used for creating a new array with the results of applying the provided function on every element in the calling array

// Example: Using for loop to double an array of numbers
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using for each to double an array of numbers
let doubledNumbersUsingForEach = [];
numbers.forEach((number) => doubledNumbersUsingForEach.push(number * 2));
console.log(doubledNumbersUsingForEach); // Output: [2, 4, 6, 8, 10]

// Using map to double an array of numbers
let doubledNumbersUsingMap = numbers.map((number) => number * 2);
console.log(doubledNumbersUsingMap); // Output: [2, 4, 6, 8, 10]

// Efficiency:
// map() is generally more efficient than for loop and for each because it returns a new array and does not modify the original array.
// However, the efficiency difference is usually negligible unless you're working with very large arrays.

// Example: Using map to extract data from an array of objects
let books = [
  { title: "Book 1", author: "Author 1", publishingDate: "2020-01-01", price: 10.99 },
  { title: "Book 2", author: "Author 2", publishingDate: "2020-02-01", price: 9.99 },
  { title: "Book 3", author: "Author 1", publishingDate: "2020-03-01", price: 12.99 },
  { title: "Book 4", author: "Author 3", publishingDate: "2020-04-01", price: 11.99 },
  { title: "Book 5", author: "Author 2", publishingDate: "2020-05-01", price: 10.99 },
];

// Using map to get an array of book titles
let bookTitles = books.map((book) => book.title);
console.log(bookTitles); // Output: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"]

// Using map to get an array of book authors
let bookAuthors = books.map((book) => book.author);
console.log(bookAuthors); // Output: ["Author 1", "Author 2", "Author 1", "Author 3", "Author 2"]

// Using map to get an array of book prices
let bookPrices = books.map((book) => book.price);
console.log(bookPrices); // Output: [10.99, 9.99, 12.99, 11.99, 10.99]

// Using map to get an array of book publishing dates
let bookPublishingDates = books.map((book) => book.publishingDate);
console.log(bookPublishingDates); // Output: ["2020-01-01", "2020-02-01", "2020-03-01", "2020-04-01", "2020-05-01"]



// Add 10 to every eleme of array

console.log("Add 10 to every eleme of array")
arr =[1,2,3,4,5]
console.log(arr.map((element)=>element*10))

// chaining 
//lets just do both multiple with 10 and +1

console.log("lets just do both multiple with 10 and +1")

console.log(arr.map((element)=>element*10).map((element)=>element+1))

console.log("lets just do both multiple with 10 and +1 , now add a filter too for some condition")

console.log(arr.map((element)=>element*10).map((element)=>element+1).filter((element) => element>=30 ))