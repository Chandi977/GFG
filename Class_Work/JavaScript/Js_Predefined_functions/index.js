// 🔥 JavaScript Predefined (Built-in) Functions

// 1️⃣ Global Functions (Direct use without object)
// 👉 Ye functions bina kisi object ke directly use hote hain.
// Syntax: functionName(value)

// parseInt(string, radix) → String ko integer me convert karta hai.
console.log(parseInt("123")); // 123
console.log(parseInt("1010", 2)); // 10 (binary to decimal)

// parseFloat(string) → String ko floating point number banata hai.
console.log(parseFloat("12.34")); // 12.34

// isNaN(value) → Check karta hai ki value NaN hai ya nahi.
console.log(isNaN("abc")); // true

// isFinite(value) → Number finite hai ya nahi check karta hai.
console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false

// eval(string) → String ko JS code ki tarah execute karta hai. (⚠️ Use carefully)
console.log(eval("2+3*5")); // 17

// encodeURI(uri) / decodeURI(uri) → URI ko pura encode/decode karta hai.
// encodeURIComponent(uri) / decodeURIComponent(uri) → Sirf ek URI component encode/decode karta hai.

// 2️⃣ String Functions
// 👉 String methods humesha ek string object ke sath use hote hain.
// Syntax: stringName.method()

let str = "Hello World";
console.log(str.length); // 11 (length property)
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.charAt(0)); // H
console.log(str.indexOf("World")); // 6
console.log(str.includes("Hello")); // true
console.log(str.replace("World", "JS")); // Hello JS
console.log(str.slice(0, 5)); // Hello
console.log(str.split(" ")); // ["Hello", "World"]

// 3️⃣ Number & Math Functions
// 👉 Number object aur Math object ke through number operations hote hain.

console.log(Number("123")); // 123
console.log(Number.isInteger(10)); // true

// Math functions
console.log(Math.round(4.6)); // 5 (nearest integer)
console.log(Math.floor(4.9)); // 4 (lowest integer)
console.log(Math.ceil(4.1)); // 5 (highest integer)
console.log(Math.max(1, 5, 9)); // 9 (maximum)
console.log(Math.min(1, 5, 9)); // 1 (minimum)
console.log(Math.pow(2, 3)); // 8 (power)
console.log(Math.sqrt(25)); // 5 (square root)
console.log(Math.random()); // 0 se 1 ke beech random number

// 4️⃣ Array Functions
// 👉 Array ke liye bahut saare built-in methods hote hain.
// Syntax: arrayName.method()

let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
console.log(arr.push(6)); // add end → returns new length
console.log(arr.pop()); // remove end → returns removed item
console.log(arr.shift()); // remove start
console.log(arr.unshift(0)); // add start
console.log(arr.includes(3)); // true
console.log(arr.indexOf(4)); // 3
console.log(arr.concat([7, 8])); // merge array
console.log(arr.join("-")); // "1-2-3-4-5"
console.log(arr.slice(1, 3)); // [2,3]
console.log(arr.splice(2, 1)); // remove element at index 2

// Higher-order array functions (callback based)
console.log(arr.map((x) => x * 2)); // transform array
console.log(arr.filter((x) => x % 2 == 0)); // filter even
console.log(arr.reduce((a, b) => a + b, 0)); // sum of elements
arr.forEach((x) => console.log(x)); // loop through array
console.log(arr.find((x) => x > 2)); // first element > 2
console.log(arr.every((x) => x > 0)); // check all positive
console.log(arr.some((x) => x > 4)); // check at least one > 4

// 5️⃣ Date Functions
// 👉 Date object se date/time handle karte hain.
// Syntax: let d = new Date();

let d = new Date();
console.log(d.toDateString()); // "Mon Sep 01 2025"
console.log(d.getFullYear()); // 2025
console.log(d.getMonth()); // 0-11 (Jan=0)
console.log(d.getDate()); // 1-31
console.log(d.getDay()); // 0-6 (Sunday=0)
console.log(d.getHours()); // 0-23
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime()); // milliseconds since 1970

// 6️⃣ JSON Functions
// 👉 JSON ke liye 2 major functions hote hain.
// Syntax: JSON.stringify(object), JSON.parse(string)

let obj = { name: "Chandi", age: 23 };
let strJSON = JSON.stringify(obj); // object → string
console.log(strJSON); // {"name":"Chandi","age":23}

let backObj = JSON.parse(strJSON); // string → object
console.log(backObj.name); // Chandi

// 7️⃣ Console Functions
// 👉 Debugging ke liye console object ke methods use hote hain.

console.log("Normal Log");
console.error("Error message");
console.warn("Warning message");
console.table([
  { id: 1, name: "Chandi" },
  { id: 2, name: "Charan" },
]);
console.time("Timer");
// kuch code
console.timeEnd("Timer");

// 8️⃣ Timer Functions
// 👉 Time-based operations ke liye use hote hain.
// Syntax: setTimeout(callback, delay), setInterval(callback, delay)

setTimeout(() => console.log("After 2 sec"), 2000);
let id = setInterval(() => console.log("Repeating..."), 1000);
clearInterval(id); // stop interval

// 9️⃣ Other Useful Functions (Browser Only)
// alert(message); // Popup box show karta hai.
// prompt(message); // User se input leta hai.
// confirm(message); // OK/Cancel dialog deta hai.

// ✅ Object.create()
// Ek naya object create karta hai ek given prototype ke sath
const proto = {
  greet: function () {
    return "Hello!";
  },
};
const obj1 = Object.create(proto);
console.log(obj1.greet()); // Hello!

// ✅ Object.keys()
// Ek object ke sirf keys (properties ke naam) return karta hai
const person = { name: "Chandi", age: 22 };
console.log(Object.keys(person)); // ["name", "age"]

// ✅ Object.values()
// Ek object ke sirf values return karta hai
console.log(Object.values(person)); // ["Chandi", 22]

// ✅ Object.entries()
// Object ko array of [key, value] pairs me convert karta hai
console.log(Object.entries(person)); // [["name","Chandi"],["age",22]]

// ✅ Object.freeze()
// Object ko freeze kar deta hai (na naye properties add hongi, na delete, na update)
const frozenObj = { lang: "JS" };
Object.freeze(frozenObj);
frozenObj.lang = "Python";
console.log(frozenObj.lang); // JS (change nahi hoga)

// ✅ Object.seal()
// Object ko seal kar deta hai (naye properties add/delete nahi hongi, par existing update ho sakti hain)
const sealedObj = { city: "Noida" };
Object.seal(sealedObj);
sealedObj.city = "Delhi";
console.log(sealedObj.city); // Delhi

// ✅ Object.assign()
// Multiple objects ko merge karke ek object banata hai
const objA = { a: 1 };
const objB = { b: 2 };
const merged = Object.assign({}, objA, objB);
console.log(merged); // { a: 1, b: 2 }

// ✅ Object.hasOwn()
// Check karta hai ki property object ke andar hai (prototype chain me nahi)
console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "toString")); // false

// ✅ Object.getOwnPropertyNames()
// Saare property names (including non-enumerable) return karta hai
console.log(Object.getOwnPropertyNames(person)); // ["name", "age"]

// ✅ Object.getOwnPropertyDescriptors()
// Har ek property ka detail descriptor return karta hai
console.log(Object.getOwnPropertyDescriptors(person));

// ✅ Object.defineProperty()
// Object me ek property define karna with special settings
const obj2 = {};
Object.defineProperty(obj2, "id", { value: 101, writable: false });
console.log(obj2.id); // 101
obj2.id = 202;
console.log(obj2.id); // 101 (kyunki writable false hai)

// ✅ Object.defineProperties()
// Multiple properties ek sath define karne ke liye
const obj3 = {};
Object.defineProperties(obj3, {
  x: { value: 10, writable: true },
  y: { value: 20, writable: false },
});
console.log(obj3); // {x: 10, y: 20}

// ✅ Object.getPrototypeOf()
// Ek object ka prototype return karta hai
console.log(Object.getPrototypeOf(obj1)); // proto object

// ✅ Object.setPrototypeOf()
// Ek object ka prototype change karne ke liye
const newProto = { sayHi: () => "Hi there!" };
Object.setPrototypeOf(obj1, newProto);
console.log(obj1.sayHi()); // Hi there!

// ✅ Object.is()
// Do values ko compare karta hai (strictly, NaN bhi compare karta hai)
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

// ✅ Object.fromEntries()
// Array of [key, value] ko object me convert karta hai
const arr2 = [
  ["brand", "Apple"],
  ["model", "iPhone"],
];
console.log(Object.fromEntries(arr2)); // { brand: "Apple", model: "iPhone" }
