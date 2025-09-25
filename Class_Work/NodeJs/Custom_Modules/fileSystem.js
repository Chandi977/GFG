// import fs from "fs";

// FS using sync

// fs.writeFileSync("fs.txt", "fs file mai text ja rha haiiii.\n");
// fs.appendFileSync("fs.txt", "This is appended text.\n");

// fs.readFile("fs.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// fs.unlinkSync("fs.txt");

// Fs usinng async

// fileOps.mjs
import { promises as fs } from "fs";

async function fileOperations() {
  try {
    // Write file
    await fs.writeFile(
      "fs_async.txt",
      "Async/Await use kr k kuch to likhunga\n"
    );
    console.log("File written successfully.");

    // Append text
    await fs.appendFile(
      "fs_async.txt",
      "Async/Await use kr k uske baad fir likhunga\n"
    );
    console.log("File appended successfully.");

    // Read file
    const data = await fs.readFile("fs_async.txt", "utf8");
    console.log("File content:\n", data);

    // Delete file
    // await fs.unlink("fs_async.txt");
    // console.log("File deleted successfully."); 
  } catch (err) {
    console.error("Error:", err);
  }
}

// Run the async function
fileOperations();
