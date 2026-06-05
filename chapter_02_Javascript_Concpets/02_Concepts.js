// JavaScript Concepts - Data Types and typeof

// Primitive Data Types
let name = "John";
let age = 25;
let isStudent = true;
let marks = null;
let city;

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof marks);      // object (special case for null)
console.log(typeof city);       // undefined

// Dynamic Typing
let data = 100;
console.log(typeof data);       // number

data = "Hello";
console.log(typeof data);       // string

data = false;
console.log(typeof data);       // boolean