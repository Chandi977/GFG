# 📘 JavaScript Notes

This document contains key JavaScript concepts explained with **definitions** and **examples**.

---

## 🔹 History of JavaScript

- JavaScript was created in **1995** by **Brendan Eich** while working at **Netscape**.
- Originally called **Mocha**, then renamed **LiveScript**, and finally **JavaScript**.
- Standardized by **ECMA International** as **ECMAScript** in **1997**.
- Today, JavaScript is one of the most widely used programming languages for both **frontend** and **backend** development.

**Example:**

```js
console.log("Hello, JavaScript World!");
```

---

## 🔹 Garbage Collection

- JavaScript uses **automatic garbage collection**.
- Garbage collector frees memory that is no longer referenced.
- You don’t manually allocate or deallocate memory (like in C/C++).

**Example:**

```js
let obj = { name: "Chandi" };
obj = null; // Garbage collector frees memory
```

---

## 🔹 Mark & Sweep Algorithm

- The most common garbage collection technique in JS.
- Process:
  1. **Mark**: Find all objects that are still reachable from the **root (window/global)**.
  2. **Sweep**: Remove objects that are not marked (unreachable).

**Example:**

```js
function createUser() {
  let user = { name: "John" };
  return user;
}

let person = createUser();
person = null; // Not reachable → garbage collected
```

---

## 🔹 How JavaScript Code Runs

- JavaScript runs inside the **JavaScript Engine** (e.g., V8 in Chrome, SpiderMonkey in Firefox).
- Uses **Execution Contexts**:
  1. **Global Execution Context (GEC)** → Created by default.
  2. **Function Execution Context (FEC)** → Created when a function is invoked.
- Uses **Call Stack** to manage execution.

**Example:**

```js
function greet() {
  console.log("Hello World");
}

greet(); // Push to call stack → Execute → Pop out
```

---

## 🔹 Prototyping in JavaScript

- Every object in JS has a hidden property called **`__proto__`**.
- Used for **prototype chaining** (inheritance).

**Example:**

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let user = new Person("Chandi");
user.sayHello(); // "Hello, my name is Chandi"
```

---

## 🔹 Objects and Null in Window Object

- In browsers, the **`window` object** is the global object.
- All global variables and functions become properties of `window`.
- `null` represents an **intentional absence** of any object value.

**Example:**

```js
console.log(window.document); // DOM object
let myVar = 10;
console.log(window.myVar); // 10

let data = null;
console.log(data); // null
```

---

## 🔹 Memory Management

- JS allocates memory when objects are created.
- Memory is automatically released when objects are no longer needed.
- Techniques:
  - **Avoid memory leaks** (don’t keep unnecessary references).
  - **Use local variables** (they are garbage collected when function exits).

**Example:**

```js
function process() {
  let temp = { largeData: new Array(1000000).fill("data") };
  console.log("Processing...");
}

process(); // temp goes out of scope → garbage collected
```

## 🧠 Memory Allocation in JavaScript

JavaScript handles memory automatically with two main types of memory:

1. **Stack Memory** – Stores **primitive values** (numbers, strings, booleans, `null`, `undefined`, `symbol`, `bigint`).
   - Stored by **value**.
   - Fast and lightweight.
2. **Heap Memory** – Stores **reference types** (objects, arrays, functions).
   - Stored by **reference** (the variable points to a memory address).
   - Larger and dynamically allocated.

### Example:

```javascript
// Stack (Primitive)
let x = 10;
let y = x; // y copies the value of x
y = 20;

console.log(x); // 10
console.log(y); // 20

// Heap (Reference)
let obj1 = { name: "Chandi" };
let obj2 = obj1; // obj2 points to the same memory location

obj2.name = "Mahato";
console.log(obj1.name); // "Mahato" (changed in both)
```

## 📋 Shallow Copy

A Shallow Copy creates a new object, but it only copies references to nested objects instead of duplicating them.

Changes in nested objects affect both copies.

Methods for Shallow Copy:

Object.assign()

Spread Operator (...)

Example:

```javascript
let obj1 = { name: "Chandi", address: { city: "Noida" } };

// Shallow copy using spread operator
let obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city); // "Delhi" (changed in both)
console.log(obj2.address.city); // "Delhi"
```

## 📋 Deep Copy

A Deep Copy duplicates the object and all nested objects, creating a completely independent copy.

Changes in nested objects do not affect the original.

Methods for Deep Copy:

```javaScript
structuredClone() (modern, preferred)

JSON.parse(JSON.stringify(obj)) (but loses functions, undefined, Date, etc.)

Libraries like lodash.cloneDeep()

Example:
let obj1 = { name: "Chandi", address: { city: "Noida" } };

// Deep copy using JSON
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Delhi";

console.log(obj1.address.city); // "Noida" (unchanged)
console.log(obj2.address.city); // "Delhi"

// ✅ Modern Deep Copy
let obj3 = structuredClone(obj1);
obj3.address.city = "Mumbai";

console.log(obj1.address.city); // "Noida"
console.log(obj3.address.city); // "Mumbai"
```

# 📘 JavaScript: Memory Allocation & Code Execution (TOA)

---

## 🧠 Memory Allocation in JavaScript

**Definition:**  
Memory allocation in JavaScript is the process where the JavaScript engine reserves memory for variables, functions, and objects during program execution.  
JavaScript uses **two main types of memory**:

- **Stack Memory (Primitive types)**
- **Heap Memory (Reference types like objects, arrays, functions)**

### 🔹 Stack Memory

- Stores **primitive values** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
- Works on **Last In First Out (LIFO)**.
- Faster access.

### 🔹 Heap Memory

- Stores **non-primitive/reference values** (Objects, Arrays, Functions).
- References (addresses) are kept in stack, actual data in heap.
- Larger but slower than stack.

### ✅ Example: Memory Allocation

```javascript
// Stack Memory (Primitive types)
let a = 10;
let b = a;
b = 20;

console.log(a); // 10 (not changed, because primitive values are copied)
console.log(b); // 20

// Heap Memory (Reference types)
let obj1 = { name: "Chandi" };
let obj2 = obj1; // Copying reference

obj2.name = "Charan";

console.log(obj1.name); // "Charan" (both point to same memory in heap)
console.log(obj2.name); // "Charan"
```

# ⚡ Code Execution in JavaScript (TOA)

---

## 📖 Definition

JavaScript follows a **single-threaded, synchronous execution model** with the help of the **Execution Context** and the **Call Stack**.  
This process is managed by the **JavaScript Engine** (e.g., V8 in Chrome).

---

## 🔹 Execution Context

Execution Context is the **environment** where JavaScript code is evaluated and executed.

It has **two phases**:

### 1. Memory Creation Phase (Hoisting / Memory Allocation)

- Variables are allocated memory in the **Global/Local Scope**.
- Functions are stored in memory with their **entire definition**.
- Variables are initialized with:
  - `undefined` (if declared with `var`)
  - **TDZ (Temporal Dead Zone)** if declared with `let` or `const`.

### 2. Code Execution Phase

- Code executes **line by line**.
- Variables get assigned their **actual values**.
- Function calls create new **Function Execution Contexts (FEC)**.

---

## 🔹 Call Stack

- JavaScript uses a **Call Stack** (LIFO – Last In, First Out) to track function execution.
- Each function call creates a **Function Execution Context (FEC)**, which gets **pushed** onto the stack.
- When the function finishes, its context is **popped out**.

---

## ✅ Example: Code Execution (TOA)

```javascript
console.log("Start");

function greet(name) {
  console.log("Hello " + name);
}

function main() {
  let user = "Chandi"; // Memory allocated (undefined → "Chandi")
  greet(user); // Function Execution Context created
}

main();

console.log("End");
```

### 📌 Execution Breakdown

1. Global Execution Context (GEC) created

   - Memory allocated:
     - greet → function definition
     - main → function definition
     - console → object

2. Code Execution
   - console.log("Start") → prints "Start"
   - main() called → new FEC pushed
     - Inside main: user = "Chandi"
     - greet(user) → new FEC pushed
       - Executes console.log("Hello Chandi")
       - Pops out of stack
     - main finishes → pops out
   - console.log("End") → prints "End"

```sql
Start
Hello Chandi
End
```

## 📝 Summary

- Memory Allocation: Happens in two phases → Stack (primitive) & Heap (reference).

- Code Execution (TOA): Controlled by Execution Context + Call Stack.

- Execution Context Phases:
  1. Memory Creation (Hoisting)
  2. Code Execution

# 🌐 Global Execution Context (GEC) in JavaScript

The **Global Execution Context (GEC)** is the **default execution context** created by the JavaScript engine when a program starts running.  
Every JavaScript program starts with the GEC.

---

## ✨ Key Points about GEC

1. **Created at the beginning** of code execution.
2. There is always **only one GEC** in a program.
3. It consists of **two main phases**:
   - **Memory Creation Phase (Creation Phase)**
   - **Code Execution Phase (Execution Phase)**

---

## 🛠️ Structure of GEC

The GEC has two parts:

1. **Memory Component (Variable Environment)**

   - Stores variables and function declarations as key-value pairs.
   - Functions are stored with their entire code, variables are set to `undefined`.

2. **Code Component (Thread of Execution)**
   - Executes code line by line.
   - Assigns actual values to variables and executes functions.

---

## 🔄 Phases of GEC

### 1. **Memory Creation Phase**

- Variables are allocated memory and initialized with `undefined`.
- Function declarations are stored as the whole function.
- Example:
  ```js
  console.log(a); // undefined
  var a = 10;
  function greet() {
    console.log("Hello!");
  }
  ```

### Memory:

    - a: undefined
    - greet: function(){...}

2. Code Execution Phase

- Variables get their actual values.
- Functions are executed when invoked.

```javascript
console.log(a); // undefined
var a = 10;
greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}
```

## 🌍 Global Object and this

    - In browser, the global object is window.
    - In Node.js, the global object is global.
    - Inside GEC:
        - this points to the global object.
        - Example:

        ```javascript
        console.log(this);  // window (in browsers)
        ```

### 📦 Example of GEC

```javascript
var x = 5;

function add(a, b) {
  return a + b;
}

console.log(x); // 5
console.log(add(2, 3)); // 5
```

**Memory Phase:\***

    - x: undefined
    - add: function(){...}

**_Execution Phase:_**

    - x = 5
    - console.log(x) → 5
    - add(2,3) → 5

# 📌 JavaScript Data Types

JavaScript is **dynamically typed**, meaning variables can hold values of any type and can change at runtime.  
Data types define the kind of values that can be stored and manipulated in JavaScript.

---

## 🔹 1. Primitive Data Types

Primitive types are **immutable** and represent single values.

### (a) Number

Represents integers and floating-point numbers.  
Special values: `Infinity`, `-Infinity`, `NaN`.

```javascript
let age = 25;
let price = 99.99;
let infinity = Infinity;
let notNumber = NaN;
```

### (b) String

Represents a sequence of characters.
Enclosed in ' ', " ", or ` ` (template literals).

```javascript
let name = "Chandi";
let message = "Hello World";
let greeting = `Hi, ${name}!`;
```

### (c) Boolean

Logical values: true or false.

```javascript
let isLoggedIn = true;
let isVerified = false;
```

### (d) Undefined

A variable declared but not assigned a value.

```javascript
let score;
console.log(score); // undefined
```

### (e) Null

Represents the intentional absence of value.

```javascript
let data = null;
```

### (f) Symbol (ES6)

Unique and immutable identifier.

```javascript
let id = Symbol("userID");
let obj = { [id]: 123 };
```

### (g) BigInt (ES11 / 2020)

Handles very large integers beyond Number.MAX_SAFE_INTEGER.

```javascript
let big = 123456789012345678901234567890n;
```

## 🔹 2. Non-Primitive (Reference) Data Types

These hold references and are mutable.

### (a) Object

Collection of key-value pairs.

```javascript
let person = {
  name: "Chandi",
  age: 23,
  isStudent: true,
};
```

### (b) Array

Ordered list of values.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### (c) Function

First-class objects (can be assigned, passed, or returned).

```javascript
function greet() {
  return "Hello!";
}
```

### (d) Other Built-in Objects

Date, RegExp, Map, Set, WeakMap, WeakSet.

```javascript
let date = new Date();
let regex = /abc/;
let map = new Map();
let set = new Set([1, 2, 3]);
```

### 📊 Summary Table

Type Category Example
Number Primitive let x = 42;
String Primitive let s = "Hello";
Boolean Primitive let isOk = true;
Undefined Primitive let a;
Null Primitive let b = null;
Symbol Primitive let id = Symbol("id");
BigInt Primitive let big = 123n;
Object Non-Primitive let obj = {name:"JS"};
Array Non-Primitive let arr = [1,2,3];
Function Non-Primitive function fn() {}

### ✅ Interview Tips

JavaScript has 7 primitive types + 1 non-primitive type (Object).

Arrays, functions, dates, regex, etc. are all Objects.

⚠️ typeof null → "object" (known JavaScript bug).

---

# 📌 JavaScript Data Types

JavaScript is **dynamically typed**, meaning variables can hold values of any type and can change at runtime.  
Data types define the kind of values that can be stored and manipulated in JavaScript.

---

## 🔹 1. Primitive Data Types

Primitive types are **immutable** and represent single values.

### (a) Number

Represents integers and floating-point numbers.  
Special values: `Infinity`, `-Infinity`, `NaN`.

```javascript
let age = 25;
let price = 99.99;
let infinity = Infinity;
let notNumber = NaN;
```

# ⚡ Hoisting in JavaScript

## 📌 Definition

**Hoisting** in JavaScript is a mechanism where **variable and function declarations** are moved to the top of their scope (script or function) **before execution**.  
This means you can use variables and functions **before they are declared** in the code.

⚠️ Only **declarations** are hoisted, not **initializations**.

---

## 🔹 1. Hoisting with `var`

Variables declared with `var` are **hoisted** and initialized with `undefined`.

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

👉 Behind the scenes:

```javascript
var a; // declaration is hoisted
console.log(a); // undefined
a = 10; // initialization stays in place
console.log(a); // 10
```

## 🔹 2. Hoisting with let and const

Variables declared with let and const are hoisted but placed in a Temporal Dead Zone (TDZ) until initialized.

Accessing them before declaration results in a ReferenceError.

```javascript
console.log(x); // ReferenceError
let x = 5;

console.log(y); // ReferenceError
const y = 15;
```

---

## 🔹 3. Function Hoisting

Function Declarations are hoisted completely (you can call them before definition).

Function Expressions (assigned to var, let, or const) are treated like variables and follow variable hoisting rules.

```javascript
Function Declaration (Hoisted ✅)
greet(); // "Hello!"

function greet() {
console.log("Hello!");
}

Function Expression (Not Hoisted ❌)
sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
console.log("Hi!");
};
```

## 📊 Summary Table

Keyword/Type Hoisted? Default Value Access Before Declaration
var ✅ Yes undefined Allowed (gives undefined)
let ✅ Yes Uninitialized ❌ ReferenceError (TDZ)
const ✅ Yes Uninitialized ❌ ReferenceError (TDZ)
Function Declaration ✅ Yes Full function ✅ Allowed
Function Expression Follows var/let/const rules Depends ❌ Error if before declaration
