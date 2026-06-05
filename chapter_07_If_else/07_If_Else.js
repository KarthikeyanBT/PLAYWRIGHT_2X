// If-Else Statements

let temperature = 28;

// Simple if
if (temperature > 30) {
    console.log("It's hot outside!");
}

// If-else
let age = 17;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// If-else if-else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Nested if
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome, Admin!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("Please log in.");
}

// Ternary Operator
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);