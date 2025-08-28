// Java Script Fundamentals

// Variables
console.log("Variables");
let age = 25;
const name = "John Doe";
var isStudent = true;

// Data Types
console.log("Data Types");
let score = 95.5; // Number
let greeting = "Hello, World!"; // String
let isActive = false; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let person = { firstName: "Jane", lastName: "Doe" }; // Object
let nothing = null; // Null
let notDefined; // Undefined

// Operators
console.log("Operators");

let sum = 10 + 5; // Addition
console.log("Sum" + sum);

let difference = 10 - 5; // Subtraction
console.log("Subtraction" + difference);

let product = 10 * 5; // Multiplication

let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulus
let isEqual = 10 === 10; // Equality
let isNotEqual = 10 !== 5; // Inequality
let isGreater = 10 > 5; // Greater than
let isLess = 5 < 10; // Less than
let isGreaterOrEqual = 10 >= 10; // Greater than or equal to
let isLessOrEqual = 5 <= 10; // Less than or equal to
let andCondition = true && false; // Logical AND
let orCondition = true || false; // Logical OR
let notCondition = !true; // Logical NOT

// Control Structures
console.log("Control Statements");
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

switch (age) {
  case 18:
    console.log("Just became an adult");
    break;
  case 25:
    console.log("Quarter century");
    break;
  default:
    console.log("Age is just a number");
}

// Loops
console.log("Loops");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count--;
} while (count > 0);

const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);

console.log(squared); // [1, 4, 9, 16]

// Functions
console.log("Functions");

function greetUser(userName) {
  return `Hello, ${userName}!`;
}
console.log(greetUser(name));

// Arrays
console.log("Arrays");
hobbies.push("traveling");
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
console.log(hobbies.length);

// Objects
console.log("Object");

console.log(person.firstName);
person.age = 30;
console.log(person);
delete person.lastName;
console.log(person);

// ES6 Features
console.log("ES6");

const multiply = (a, b) => a * b;
console.log(multiply(5, 3));
let [firstHobby, secondHobby] = hobbies;
console.log(firstHobby, secondHobby);
let { firstName, age: personAge } = person;
console.log(firstName, personAge);
class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  speak() {
    console.log(`${this.name} the ${this.type} says hello!`);
  }
}
const dog = new Animal("Dog", "Buddy");
dog.speak();

// Error Handling
console.log("Error Handeling");

try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Division by zero");
  }
} catch (error) {
  console.error(error.message);
}
// Asynchronous JavaScript
console.log("Asynchronous JavaScript");

setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000);
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};
fetchData().then((data) => console.log(data));

// DOM Manipulation (Browser Environment Only)
console.log("Dom Manipulation");

document.getElementById("myElement").innerText = "Hello, DOM!";
document.querySelector(".myClass").style.color = "blue";
let newElement = document.createElement("div");
newElement.innerText = "New Element";
document.body.appendChild(newElement);

// Event Handling (Browser Environment Only)
console.log("Event Handling");

document.getElementById("myButton").addEventListener("click", () => {
  alert("Button Clicked!");
});

// Template Literals
console.log("Template Literals");

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Spread and Rest Operators
console.log("Spread and Rest Operators");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
// Modules (ES6)
// export const myVariable = "Hello, Module!";
// import { myVariable } from "./myModule.js";
console.log("JavaScript Fundamentals Script Loaded");
// End of JavaScript Fundamentals
console.log("JavaScript Fundamentals Script Loaded");
