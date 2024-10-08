// Why do we need filter()?
// We need filter() to create a new array with all elements that pass the test implemented by the provided function.

// Example: Using for loop to filter an array
// Let's say we have an array of numbers and we want to get all numbers that are greater than 5.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = [];

// Using for loop to filter the array
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]

// Using filter() to filter the array
// This is much simpler and more efficient than using a for loop.
let filteredNumbersUsingFilter = numbers.filter((number) => number > 5);
console.log(filteredNumbersUsingFilter); // Output: [6, 7, 8, 9, 10]

// Example: Using filter() to extract data from an array of objects
// Let's say we have an array of books with author, publishing date, and other data.
let books = [
  { title: "Book 1", author: "Author 1", publishingDate: "2020-01-01", price: 10.99 },
  { title: "Book 2", author: "Author 2", publishingDate: "2020-02-01", price: 9.99 },
  { title: "Book 3", author: "Author 1", publishingDate: "2020-03-01", price: 12.99 },
  { title: "Book 4", author: "Author 3", publishingDate: "2020-04-01", price: 11.99 },
  { title: "Book 5", author: "Author 2", publishingDate: "2020-05-01", price: 10.99 },
];

// Using filter() to get all books written by Author 1
console.log("Using filter() to get all books written by Author 1")
let booksByAuthor1 = books.filter((book) => book.author === "Author 1");
console.log(booksByAuthor1);

// Using filter() to get all books published after 2020-03-01
console.log("Using filter() to get all books published after 2020-03-01")
let booksPublishedAfterMarch2020 = books.filter((book) => new Date(book.publishingDate) > new Date("2020-03-01"));
console.log(booksPublishedAfterMarch2020);

// Using filter() to get all books with price greater than 10.99
console.log("Using filter() to get all books with price greater than 10.99")
let booksWithPriceGreaterThan10 = books.filter((book) => book.price > 10.99);
console.log(booksWithPriceGreaterThan10);

// Using filter() to get all books with title containing the word "Book"
console.log("Using filter() to get all books with title containing the word 'Book'")
let booksWithTitleContainingBook = books.filter((book) => book.title.includes("Book"));
console.log(booksWithTitleContainingBook);