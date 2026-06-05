// Loops in JavaScript

// For Loop
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// While Loop
console.log("--- While Loop ---");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// Do-While Loop
console.log("--- Do-While Loop ---");
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);

// For...of Loop (Arrays)
console.log("--- For...of Loop ---");
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in Loop (Objects)
console.log("--- For...in Loop ---");
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Break and Continue
console.log("--- Break and Continue ---");
for (let i = 1; i <= 10; i++) {
    if (i === 3) continue;  // Skip 3
    if (i === 7) break;     // Stop at 7
    console.log(i);
}