// 🔀 JavaScript Conditional Statements

/* 
👉 If...Else Statement
Definition: Jab hume ek condition check karni ho, agar true hai to ek block execute hoga warna doosra.
Syntax:
if(condition) {
   // true hone par yeh chalega
} else {
   // false hone par yeh chalega
}
*/
let age = 13;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("Your age is less then expected to vote.");
}

/* 
👉 If...Else Ladder
Definition: Jab hume multiple conditions check karni ho, tab ladder use karte hain.
Syntax:
if(condition1) {
   // code
} else if(condition2) {
   // code
} else {
   // agar upar ka sab false ho to yeh chalega
}
*/
let num1 = 5,
  num2 = 7,
  num3 = 10;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " Is greatest among " + num2 + " " + num3);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " Is greatest among " + num1 + " " + num3);
} else {
  console.log(num3 + " Is greatest among " + num1 + " " + num2);
}

/* 
👉 Nested If...Else
Definition: Ek condition ke andar doosri condition check karna ho to nested if-else use hota hai.
Syntax:
if(condition1) {
   if(condition2) {
      // code
   } else {
      // code
   }
} else {
   // code
}
*/
let num = 9;

if (num > 0) {
  if (num % 2 === 0) {
    console.log(num + " Is a positive even number");
  } else {
    console.log(num + " Is a positive odd number.");
  }
} else {
  if (num < 0) {
    console.log(num + " Is a negative number.");
  } else {
    console.log("Number is 0");
  }
}

/* 
👉 Switch Case
Definition: Jab ek hi variable ya expression ke multiple fixed values check karne ho, to switch case use hota hai.
Syntax:
switch(expression) {
   case value1:
      // code
      break;
   case value2:
      // code
      break;
   default:
      // agar koi case match na ho
}
*/
let op = "+";
let numOP1 = 10,
  numOP2 = 15;

switch (op) {
  case "+":
    console.log(numOP1 + numOP2);
    break;
  case "-":
    console.log(numOP1 - numOP2);
    break;
  case "*":
    console.log(numOP1 * numOP2);
    break;
  case "/":
    console.log(numOP1 / numOP2);
    break;
  case "%":
    console.log(numOP1 % numOP2);
    break;
  default:
    console.log("Not a mathematical operation.");
    break;
}
