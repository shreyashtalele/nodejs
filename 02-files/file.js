// Import the built-in File System module
const fs = require("fs");

// ======================================================
// WRITE FILE
// ======================================================

// Synchronous file write
// Creates a new file or overwrites the existing file
// Execution waits until the operation is completed
// fs.writeFileSync('./test.txt', 'Shreyash Talele')

// Asynchronous file write
// Creates a new file or overwrites the existing file
// Does not block the execution of other code
// fs.writeFile('./test.txt', 'Shreyash Talele', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })


// ======================================================
// READ FILE
// ======================================================

// Synchronous file read
// Reads the file content and returns it immediately
// Execution waits until the file is fully read
// const result = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(result);

// Asynchronous file read
// Reads the file in the background and returns data through callback
// fs.readFile('./contact.txt', 'utf-8', (error, result) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });


// ======================================================
// APPEND DATA TO FILE
// ======================================================

// Adds new content at the end of the file
// Useful for logs and history tracking
// fs.appendFileSync(
//     './test.txt',
//     `\n${new Date().toLocaleString()}`
// );


// ======================================================
// COPY FILE
// ======================================================

// Creates a copy of test.txt and stores it as copy.txt
// fs.cpSync('./test.txt', './copy.txt');


// ======================================================
// DELETE FILE
// ======================================================

// Deletes the specified file permanently
// fs.unlinkSync('./copy.txt');


// ======================================================
// FILE INFORMATION (STATS)
// ======================================================

// Returns detailed information about the file
// such as size, creation time, modification time, etc.
console.log(fs.statSync('./test.txt'));

// Checks whether the given path points to a file
// Returns true if it is a file, otherwise false
console.log(fs.statSync('./test.txt').isFile());


// ======================================================
// CREATE DIRECTORY (FOLDER)
// ======================================================

// Creates a folder named "my-docs"
// Throws an error if the folder already exists
fs.mkdirSync('my-docs');

// Creates nested folders recursively
// If parent folders don't exist, Node.js creates them automatically
// Folder structure created:
// my-docs
// └── a
//     └── b
fs.mkdirSync('my-docs/a/b', { recursive: true });


// ======================================================
// COMMON FS METHODS SUMMARY
// ======================================================
// writeFileSync()  -> Write file synchronously
// writeFile()      -> Write file asynchronously
// readFileSync()   -> Read file synchronously
// readFile()       -> Read file asynchronously
// appendFileSync() -> Add content to existing file
// cpSync()         -> Copy file
// unlinkSync()     -> Delete file
// statSync()       -> Get file information
// mkdirSync()      -> Create directory/folder
// ======================================================