// User Input in Node.js

// Using readline module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Example 1: Simple input
rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});

// Example 2: Multiple inputs (commented for standalone use)
/*
rl.question('Enter first number: ', (a) => {
    rl.question('Enter second number: ', (b) => {
        let sum = parseInt(a) + parseInt(b);
        console.log(`Sum: ${sum}`);
        rl.close();
    });
});
*/

// Example 3: Process arguments
// Run: node 09_UserInput.js arg1 arg2
console.log("Process arguments:", process.argv.slice(2));