// import { add, sub, mul, div } from "./calculator.js";
import operations from "./calculator.js";

import { get, post } from "./apiTry.js";
const { add, sub, mul, div } = operations;

console.log(add(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));
console.log(div(10, 20));

async function testAPI() {
  const posts = await get("/posts");
  console.log(posts);

  const newPost = await post("/posts", { title: "Hello", body: "World" });
  console.log(newPost);
}

testAPI();
