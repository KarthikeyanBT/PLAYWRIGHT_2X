// Objects in JavaScript

// Creating an Object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log("Person:", person);

// Accessing Properties
console.log("First Name:", person.firstName);
console.log("Last Name:", person["lastName"]);

// Modifying Properties
person.age = 31;
person["isStudent"] = true;
console.log("Modified age:", person.age);

// Adding Properties
person.email = "john@example.com";
console.log("With email:", person);

// Deleting Properties
delete person.isStudent;
console.log("After delete:", person);

// Object Methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    },
    startEngine() {
        console.log("Engine started!");
    }
};

console.log(car.getInfo());
car.startEngine();

// Object.keys, Object.values, Object.entries
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Checking if property exists
console.log("Has 'age':", "age" in person);
console.log("Has 'salary':", "salary" in person);

// Object Destructuring
let { firstName, lastName, age } = person;
console.log("Destructured:", firstName, lastName, age);

// Spread Operator
let personCopy = { ...person };
console.log("Copy:", personCopy);

// Object.assign
let target = { a: 1 };
let source = { b: 2, c: 3 };
let merged = Object.assign(target, source);
console.log("Merged:", merged);