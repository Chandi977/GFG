// setTimeout(() => {
//   console.log("set 1");
// }, 5000);
// setTimeout(() => {
//   console.log("set 2");
// }, 5000);

// setTimeout(() => {
//   console.log("set 3");
// }, 5000);

// const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data);
//     console.log(data.title);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log(
//       "Tum chae kam karo na kro mai to output dunga ki tumhe kam mila tha."
//     );
//   });
// console.log(response);

// A fake async function to simulate API calls
function fakeApi(name, time, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name} failed ❌`);
      } else {
        resolve(`${name} success ✅`);
      }
    }, time);
  });
}

// --- Promise chaining with then, catch, finally ---
fakeApi("Step 1", 1000)
  .then((result) => {
    console.log(result); // Step 1 success ✅
    return fakeApi("Step 2", 800);
  })
  .then((result) => {
    console.log(result); // Step 2 success ✅
    return fakeApi("Step 3", 500, true); // simulate error
  })
  .then((result) => {
    console.log(result); // won't run because Step 3 fails
  })
  .catch((error) => {
    console.error("Caught error:", error); // Step 3 failed ❌
    return "Recovered from error"; // return recovery value
  })
  .finally(() => {
    console.log("Chain finished (success or error) 🔚");
  });

// --- Promise.all (waits for all to succeed, rejects if any fail) ---
Promise.all([
  fakeApi("API 1", 1000),
  fakeApi("API 2", 500),
  fakeApi("API 3", 800),
])
  .then((results) => console.log("Promise.all results:", results))
  .catch((error) => console.error("Promise.all error:", error));

// --- Promise.race (resolves/rejects as soon as one finishes) ---
Promise.race([fakeApi("Fast API", 400), fakeApi("Slow API", 1500)])
  .then((result) => console.log("Promise.race result:", result))
  .catch((error) => console.error("Promise.race error:", error));

// --- Promise.allSettled (waits for all, gives statuses regardless of success/failure) ---
Promise.allSettled([
  fakeApi("Good API", 600),
  fakeApi("Bad API", 700, true),
]).then((results) => console.log("Promise.allSettled results:", results));

// --- Promise.any (returns first successful one, ignores failures unless all fail) ---
Promise.any([
  fakeApi("Fail 1", 300, true),
  fakeApi("Fail 2", 400, true),
  fakeApi("Success API", 500),
])
  .then((result) => console.log("Promise.any result:", result))
  .catch((error) => console.error("Promise.any error (all failed):", error));
