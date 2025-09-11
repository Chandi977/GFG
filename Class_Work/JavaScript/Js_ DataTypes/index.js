// 📌 JavaScript Data Types with Definitions, Examples & Experiments
// -------------------------------------------------------------

// JavaScript me 2 tarah ke data types hote hain:
// 1. Primitive Data Types (Number, String, Boolean, Undefined, Null, BigInt, Symbol)
// 2. Non-Primitive Data Types (Object, Array, Function)

// 1️⃣ Number
// 👉 Number ek primitive data type hai jo integer aur decimal dono store kar sakta hai.
let num = 9; // ek simple integer
let pi = 3.14; // float value
let inf = Infinity; // infinite value (special value)
let notANum = NaN; // Not a Number (jab invalid calculation hota hai)

console.log("Number:", num, pi, inf, notANum);

// 🧪 Experiment
console.log(10 / 0); // Infinity
console.log("abc" * 2); // NaN

// 2️⃣ String
// 👉 String ek primitive data type hai jo text store karne ke liye use hota hai.
// Yeh double quotes (" "), single quotes (' '), ya backticks (``) me likha ja sakta hai.
let str1 = "Hello";
let str2 = "World";
let str3 = `Template String with value: ${num}`; // Template literals

console.log("String:", str1, str2, str3);

// 🧪 Experiment
console.log(str1 + " " + str2); // Concatenation

// 3️⃣ Boolean
// 👉 Boolean ek primitive type hai jo sirf 2 value le sakta hai: true ya false.
let isJSFun = true;
let isFishFlying = false;

console.log("Boolean:", isJSFun, isFishFlying);

// 🧪 Experiment
console.log(5 > 2); // true
console.log(10 < 2); // false

// 4️⃣ Undefined
// 👉 Undefined tab aata hai jab variable declare kiya ho par value assign na ho.
let x;
console.log("Undefined:", x);

// 🧪 Experiment
let test;
console.log(test === undefined); // true

// 5️⃣ Null
// 👉 Null ek primitive value hai jo "intentional empty value" ko represent karta hai.
let emptyValue = null;
console.log("Null:", emptyValue);

// 🧪 Experiment
console.log(typeof emptyValue); // "object" (JS ka historical bug)

// 6️⃣ BigInt
// 👉 BigInt ek primitive type hai jo bohot bade integers ko store karta hai
// (jo Number se bada ho, yani 2^53 se zyada).
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// 🧪 Experiment
console.log(bigNumber + 10n); // BigInt ke sath hamesha "n" use karna padta hai

// 7️⃣ Symbol
// 👉 Symbol ek unique primitive value hai jo mostly unique identifiers banane me use hota hai.
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("Symbol:", sym1, sym2);
console.log("Are they equal?", sym1 === sym2); // false (always unique)

// 🧪 Experiment
let objSym = {};
objSym[sym1] = "Value1";
objSym[sym2] = "Value2";
console.log(objSym);

// 8️⃣ Object
// 👉 Object ek non-primitive data type hai jo key-value pairs store karta hai.
let person = {
  name: "Chandi",
  age: 22,
  isStudent: true,
};
console.log("Object:", person);

// 🧪 Experiment
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// 9️⃣ Array
// 👉 Array ek special object hai jo ordered collection store karta hai.
let arr = [10, 20, 30, "Hello", true];
console.log("Array:", arr);

// 🧪 Experiment
arr.push(99); // naya element add
console.log(arr);
console.log(arr[2]); // Access element by index

// 🔟 Function
// 👉 Function ek object hai jo code block ko repeatable banata hai.
// Yeh "first-class citizens" hai matlab dusre variables ki tarah pass/return kar sakte ho.
function greet(name) {
  return "Hello, " + name;
}
console.log("Function:", greet("Chandi"));

// 🧪 Experiment - Function Expression
let square = function (n) {
  return n * n;
};
console.log("Square of 5:", square(5));

// Arrow Function
let add = (a, b) => a + b;
console.log("Add:", add(5, 10));

// 1️⃣1️⃣ typeof operator
// 👉 typeof ek operator hai jo kisi bhi value ka data type check karta hai.
console.log("typeof 123:", typeof 123); // number
console.log("typeof 'abc':", typeof "abc"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object (bug)
console.log("typeof 123n:", typeof 123n); // bigint
console.log("typeof Symbol():", typeof Symbol()); // symbol
console.log("typeof {a:1}:", typeof { a: 1 }); // object
console.log("typeof [1,2,3]:", typeof [1, 2, 3]); // object (array is special object)
console.log("typeof function(){}:", typeof function () {}); // function
