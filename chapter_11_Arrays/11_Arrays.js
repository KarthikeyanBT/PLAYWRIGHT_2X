// Arrays in JavaScript

// Creating Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Orange"];
let mixed = [1, "Hello", true, null];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// Accessing Elements
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Modifying Arrays
fruits[1] = "Mango";
console.log("Modified:", fruits);

// Array Methods
let arr = [10, 20, 30];

// Push - add to end
arr.push(40);
console.log("After push:", arr);

// Pop - remove from end
arr.pop();
console.log("After pop:", arr);

// Unshift - add to beginning
arr.unshift(5);
console.log("After unshift:", arr);

// Shift - remove from beginning
arr.shift();
console.log("After shift:", arr);

// IndexOf
console.log("Index of 20:", arr.indexOf(20));

// Includes
console.log("Includes 30:", arr.includes(30));

// Slice
console.log("Slice (0, 2):", arr.slice(0, 2));

// Splice
arr.splice(1, 1, 25);
console.log("After splice:", arr);

// Iterating
console.log("--- Iterating ---");
arr.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

// Map
let doubled = arr.map(item => item * 2);
console.log("Doubled:", doubled);

// Filter
let greaterThan20 = arr.filter(item => item > 20);
console.log("Greater than 20:", greaterThan20);