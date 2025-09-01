// 🔁 JavaScript Loops Example
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* 
👉 For Loop
Definition: Jab hume code ko ek fixed number of times chalana ho, tab for loop use hota hai.
Syntax: 
for(initialization; condition; increment/decrement) {
   // code
}
*/
console.log("For loop");
for (let i = 0; i < 5; i++) {
  // i=0 se start karega, jab tak i<5 hai tab tak chalega, har bar i++ hoga
  console.log(i);
}

/* 
👉 While Loop
Definition: Jab tak ek condition true hai, tab tak loop chalta hai.
Syntax:
while(condition) {
   // code
}
*/
console.log("While loop");
let i = 1;
while (i <= 5) {
  // Jab tak i<=5 hai tab tak chalega
  console.log("Count: " + i);
  i++;
}

/* 
👉 Do...While Loop
Definition: Yeh loop kam se kam ek baar chalega chahe condition false hi kyun na ho.
Syntax:
do {
   // code
} while(condition);
*/
console.log("Do While Loop");
i = 1;
do {
  console.log("Count: " + i);
  i++;
} while (i <= 5); // Pehle chalega, baad me condition check hogi

/* 
👉 For...in Loop
Definition: Yeh loop object ke keys par iterate karta hai.
Syntax:
for (let key in object) {
   // code
}
*/
console.log("For..in Loop");
let person = { name: "Chandi", age: 23, city: "Jamshedpur" };
for (const key in person) {
  console.log(key + ": " + person[key]); // Key aur uska value print karega
}

/* 
👉 For...of Loop
Definition: Yeh loop arrays ya iterable values par iterate karta hai.
Syntax:
for (let item of iterable) {
   // code
}
*/
console.log("For Of Loop");
let colors = ["Red", "Green", "Yellow", "Black"];
for (const color of colors) {
  console.log(color);
}

/* 
👉 forEach Loop
Definition: Array ke har element ke liye ek callback function execute hota hai.
Syntax:
array.forEach((element, index, arr) => {
   // code
});
*/
console.log("For Each loop");
array.forEach((element) => {
  console.log(element);
});

/* 
👉 Map Loop
Definition: Array ke har element ko transform karke ek naya array return karta hai.
Syntax:
let newArray = array.map((element, index, arr) => {
   // return new value
});
*/
console.log("Map loop");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let squares = numbers.map((num) => num * num); // Har element ka square banayega
console.log(squares);
