// Import required modules
const readline = require('readline');
const prompt = require('prompt-sync')(); // Make sure to install this package

// 1. Using readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompting for name using readline
rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close(); // Close the readline interface

    // 2. Using command line arguments
    const args = process.argv.slice(2); // Get command line arguments
    if (args.length > 0) {
        console.log(`Command line argument(s): ${args.join(', ')}`);
    } else {
        console.log('No command line arguments were provided.');
    }

    // 3. Using prompt-sync for synchronous input
    const age = prompt('How old are you? '); // Prompt for age
    console.log(`You are ${age} years old.`);
});

