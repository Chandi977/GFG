// 🌟 JavaScript Variables 🌟
// Variables are containers to store data values.
// In JS, we can declare variables using var, let, and const.

// ----------------------------
// 1️⃣ var (Function Scoped)
// ----------------------------
var num = 10;
console.log("Value of var num:", num); // 10

// ✅ var allows redeclaration
var num = 20;
console.log("Redeclared var num:", num); // 20

// ✅ var allows reassignment
num = 30;
console.log("Reassigned var num:", num); // 30

// ❌ Hoisting Experiment
console.log("Hoisting Experiment " + testVar); // undefined (hoisted but not initialized)
var testVar = "Hoisted var";

// ----------------------------
// 2️⃣ let (Block Scoped)
// ----------------------------
let num1 = 15;
console.log("Value of let num1:", num1); // 15

// ❌ let does not allow redeclaration in same scope
// let num1 = 25; // ❌ Error: Identifier 'num1' has already been declared

// ✅ but reassignment is allowed
num1 = 50;
console.log("Reassigned let num1:", num1); // 50

// ✅ Block Scope Experiment
{
  let blockLet = "Inside Block";
  console.log("Block let:", blockLet); // works inside block
}
// console.log(blockLet); // ❌ ReferenceError (not accessible outside block)

// ----------------------------
// 3️⃣ const (Block Scoped & Immutable)
// ----------------------------
const myName = "Chandi Charan Mahato";
console.log("Const name:", myName); // "Chandi Charan Mahato"

// ❌ const does not allow redeclaration
// const myName = "Other"; // Error

// ❌ const does not allow reassignment
// myName = "Changed"; // Error

// ✅ BUT in objects & arrays, we can change values (not reassign variable itself)
const person = { name: "Chandi", age: 23 };
console.log("Const object before:", person);

person.age = 24; // allowed (mutating object)
console.log("Const object after update:", person);

// ❌ Reassigning whole object is not allowed
// person = { name: "Charan" }; // Error

// ----------------------------
// 🔬 Final Experiment: Difference
// ----------------------------
function testVarLetConst() {
  if (true) {
    var x = "I am var";
    let y = "I am let";
    const z = "I am const";
  }
  console.log(x); // ✅ Accessible (function scoped)
  //   console.log(y); // ❌ Error (block scoped)
  //   console.log(z); // ❌ Error (block scoped)
}

testVarLetConst();
