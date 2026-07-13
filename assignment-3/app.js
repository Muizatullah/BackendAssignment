//  ====Assignment Two=====
// ==Question One 
// Build a command-line application that can:

// 1. Create File

// 2. Read File

// 3. Update File

// 4. Delete File

// 5. Rename File

// 6. Show File Path
// Core Modules Used:

// fs
// path


//write-file
import fs from "fs";
import path from "path";
import http from "http";
import os from "os";

fs.writeFileSync("week2.txt", "welcome to learning backend")
fs.writeFileSync("week2.txt","learning backend developement is awesome");
fs.writeFileSync("week2.txt", "I can not wait to become a backend developer");



// read from file 
const data = fs.readFileSync("week2.txt","utf-8");
console.log(data);

// add data to file
fs.appendFileSync("week2.txt", " " +"so let get straight into the business");


//rename file 
fs.renameSync("week2.txt", "week-two.txt");

//delete file

const getFilePath = path.extname("week-two.txt")
console.log(getFilePath);

const getFileName = path.basename("week-two.txt")
console.log(getFileName);
 const getDirName = path.dirname("week-two.txt")
 console.log(getDirName);
 
 



//  Project 2: Simple HTTP Server
// Create a Node.js server with the following routes:

// / → Welcome page
// /about → About page
// /courses → List of backend courses
// /contact → Contact page
// Any unknown route → Custom 404 page

const server = http.createServer((req,res) => {

    if (req.url === "/about") {
        rest.write("This is  the about page ");
    }else if(req.url === "/contact"){
        res.write ("This is contact page");
    }else {
        res.write("welcome to my first server");
    }


res.end();
});

const port = 2030
server.listen(port, (req, res)=> {
    console.log(`It start from localhost:${port}`);
    
})

// Project 3: System Information Tool
// Build a CLI application that displays:

// Hostname
// Operating System
// CPU Architecture
// Total Memory
// Free Memory
// System Uptime


console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());








// Create a **Secure Notes CLI** that combines multiple core modules:

// * Use `fs` to save and read notes.
// * Use `path` to manage file locations.
// * Use `crypto` to generate a unique ID for each note.
// * Use `events` to log actions such as "note created" or "note deleted".
// * Display system information with `os` when the application starts.




