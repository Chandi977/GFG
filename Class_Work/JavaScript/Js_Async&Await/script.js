// ------------------------------
// Definition of async/await
// ------------------------------
// async: Used before a function to make it return a Promise.
// await: Pauses the execution inside an async function until the Promise is resolved/rejected.

// A fake API function to simulate asynchronous operations
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

// ------------------------------
// Example 1: Sequential execution with async/await
// ------------------------------
async function sequentialExample() {
  try {
    console.log("Sequential Execution Started...");

    // Step 1 runs first
    let step1 = await fakeApi("Step 1", 1000);
    console.log(step1);

    // Step 2 waits until Step 1 finishes
    let step2 = await fakeApi("Step 2", 800);
    console.log(step2);

    // Step 3 waits until Step 2 finishes
    let step3 = await fakeApi("Step 3", 600);
    console.log(step3);

    console.log("Sequential Execution Done ✅");
  } catch (error) {
    console.error("Error in sequentialExample:", error);
  } finally {
    console.log("Sequential Example Finished 🔚");
  }
}

// ------------------------------
// Example 2: Parallel execution with Promise.all
// ------------------------------
// Promise.all: Runs multiple async tasks in parallel and waits for all to finish.
async function parallelExample() {
  try {
    console.log("Parallel Execution Started...");

    // Start all API calls at the same time
    let results = await Promise.all([
      fakeApi("Parallel 1", 1000),
      fakeApi("Parallel 2", 800),
      fakeApi("Parallel 3", 600),
    ]);

    // results is an array containing all resolved values
    console.log("Parallel Results:", results);

    console.log("Parallel Execution Done ✅");
  } catch (error) {
    console.error("Error in parallelExample:", error);
  } finally {
    console.log("Parallel Example Finished 🔚");
  }
}

// ------------------------------
// Run both examples
// ------------------------------
sequentialExample().then(() => {
  parallelExample();
});
