// 🔀 JavaScript Functions

/* 
👉 1. Named Function
Definition: Function ko ek naam diya jata hai aur usko bar-bar call kar sakte hain.
Syntax:
function functionName(params) {
   // code
   return value;
}
*/
console.log("👉 Named Function");
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Chandi")); // Example

/* 
👉 2. Function Expression
Definition: Function ko ek variable ke andar assign kar dete hain.
Syntax:
const varName = function(params) {
   // code
};
*/
console.log("👉 Function Expression");
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3)); // Example

/* 
👉 3. Arrow Function
Definition: ES6 me introduce hua, short syntax hota hai. Mostly small functions ke liye use hota hai.
Syntax:
const funcName = (params) => expression;
*/
console.log("👉 Arrow Function");
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Example

/* 
👉 4. Anonymous Function
Definition: Function bina naam ke hota hai. Mostly callback me use hota hai.
Syntax:
setTimeout(function() {
   // code
}, time);
*/
console.log("👉 Anonymous Function");
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);

/* 
👉 5. Immediately Invoked Function Expression (IIFE)
Definition: Function jo turant execute ho jata hai bina explicitly call kiye.
Syntax:
(function() {
   // code
})();
*/
console.log("👉 Immediately Invoked Function (IIFE)");
(function () {
  console.log("Immediately Executed!");
})();

/* 
👉 6. Function with Default Parameters
Definition: Agar parameter pass na ho to default value use hoti hai.
Syntax:
function funcName(param = defaultValue) {
   // code
}
*/
console.log("👉 Function with Default Parameters");
function greet2(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet2()); // Example (default param)
console.log(greet2("Chandi")); // Example (custom param)

/* 
👉 7. Rest Parameters
Definition: Multiple arguments ko ek array me pack kar deta hai.
Syntax:
function funcName(...args) {
   // code
}
*/
console.log("👉 Function with Rest Parameters");
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // Example

/* 
👉 8. Callback Function
Definition: Ek function ko dusre function ke andar argument ke form me pass karte hain.
Syntax:
function mainFunc(param, callback) {
   // code
   callback();
}
*/
console.log("👉 Function as a Callback");
function processUserInput(name, callback) {
  console.log("User: " + name);
  callback();
}
processUserInput("Chandi", () => {
  console.log("Callback function Executed");
});
