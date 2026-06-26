// ---------------------------------------------------------
// Increase Thread Pool Size
// Must be set BEFORE requiring modules
// Default = 4 Threads
// Maximum = 128 Threads
// ---------------------------------------------------------

process.env.UV_THREADPOOL_SIZE = 8;

// ---------------------------------------------------------
// Import Modules
// ---------------------------------------------------------

const fs = require("fs");
const crypto = require("crypto");

// ---------------------------------------------------------
// Top Level Code Starts
// ---------------------------------------------------------

console.log("1. Top Level Code Started");

// ---------------------------------------------------------
// Timer Callback
// Registered in Timers Queue
// ---------------------------------------------------------

setTimeout(() => {
    console.log("2. Timer 1 Executed");
}, 0);

// ---------------------------------------------------------
// setImmediate Callback
// Registered in Check Queue
// ---------------------------------------------------------

setImmediate(() => {
    console.log("3. Immediate 1 Executed");
});

// ---------------------------------------------------------
// File System Operation
// Offloaded to libuv Thread Pool
// ---------------------------------------------------------

fs.readFile("sample.txt", "utf8", (err, data) => {

    console.log("4. File Read Completed");

    console.log("File Content :", data);

    //-------------------------------------------------------
    // Register another Timer
    //-------------------------------------------------------

    setTimeout(() => {
        console.log("5. Timer 2 Executed");
    }, 0);

    //-------------------------------------------------------
    // Register another Immediate
    //-------------------------------------------------------

    setImmediate(() => {
        console.log("6. Immediate 2 Executed");
    });

});

// ---------------------------------------------------------
// CPU Intensive Task
// Password Hashing
// Uses libuv Thread Pool
// ---------------------------------------------------------

crypto.pbkdf2(
    "password",
    "salt",
    100000,
    512,
    "sha512",
    () => {
        console.log("7. CPU Intensive Task Completed");
    }
);

// ---------------------------------------------------------
// Another CPU Intensive Task
// ---------------------------------------------------------

crypto.pbkdf2(
    "hello",
    "salt",
    100000,
    512,
    "sha512",
    () => {
        console.log("8. CPU Task 2 Completed");
    }
);

// ---------------------------------------------------------
// Another CPU Intensive Task
// ---------------------------------------------------------

crypto.pbkdf2(
    "nodejs",
    "salt",
    100000,
    512,
    "sha512",
    () => {
        console.log("9. CPU Task 3 Completed");
    }
);

// ---------------------------------------------------------
// Another CPU Intensive Task
// ---------------------------------------------------------

crypto.pbkdf2(
    "javascript",
    "salt",
    100000,
    512,
    "sha512",
    () => {
        console.log("10. CPU Task 4 Completed");
    }
);

// ---------------------------------------------------------
// Another CPU Intensive Task
// If Thread Pool = 4
// This waits until one worker thread becomes free.
// ---------------------------------------------------------

crypto.pbkdf2(
    "backend",
    "salt",
    100000,
    512,
    "sha512",
    () => {
        console.log("11. CPU Task 5 Completed");
    }
);

// ---------------------------------------------------------
// End of Top Level Code
// ---------------------------------------------------------

console.log("12. Top Level Code Finished");