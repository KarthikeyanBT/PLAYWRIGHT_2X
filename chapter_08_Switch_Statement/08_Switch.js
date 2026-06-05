// Switch Statement

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day:", dayName);

// Switch with multiple cases
let grade = "B";

switch (grade) {
    case "A":
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Average performance.");
        break;
    case "D":
    case "F":
        console.log("Needs improvement.");
        break;
    default:
        console.log("Invalid grade.");
}