// Functions in JavaScript

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 7));

// Default Parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greetUser());
console.log(greetUser("Bob"));

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum of 1,2,3,4:", sum(1, 2, 3, 4));

// Callback Function
function processData(data, callback) {
    let result = callback(data);
    return result;
}
let squared = processData(5, n => n * n);
console.log("Squared:", squared);

// Function Scope
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // Accessible
    console.log(localVar);     // Accessible
}
scopeExample();
// console.log(localVar); // Error: localVar is not defined