// Strings in JavaScript

let str = "  Hello, World!  ";

// String Length
console.log("Length:", str.length);

// Accessing Characters
console.log("First char:", str[0]);
console.log("Char at index 7:", str.charAt(7));

// Changing Case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// Trim
console.log("Trimmed:", str.trim());

// IndexOf and Includes
console.log("Index of 'World':", str.indexOf("World"));
console.log("Includes 'Hello':", str.includes("Hello"));

// Slice and Substring
console.log("Slice:", str.slice(2, 7));
console.log("Substring:", str.substring(2, 7));

// Replace
let newStr = str.replace("World", "JavaScript");
console.log("Replaced:", newStr);

// Split
let words = "Apple,Banana,Orange".split(",");
console.log("Split:", words);

// Template Literals
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// String Concatenation
let firstName = "John";
let lastName = "Doe";
console.log("Full name:", firstName + " " + lastName);

// Escape Characters
console.log("Line 1\nLine 2");
console.log("He said \"Hello\"");

// String Comparison
console.log("'abc' === 'abc':", "abc" === "abc");
console.log("'abc' < 'def':", "abc" < "def");