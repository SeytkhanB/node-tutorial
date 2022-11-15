// fs - stands for "file system"
// when it comes to file module there are two flavors
// async (non blocking) fs module & sync (blocking) fs module

// SYNCHRONOUS FS MODULE
// const fs = require('fs')
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("first is: ", first); // first is:  Hello there, this is first text file
console.log("second is: ", second); // second is:  Hello there, this is second text file

writeFileSync(
  "./content/third.txt",
  `Here is the result: \n ${first} \n ${second}`
);
const third = readFileSync("./content/third.txt", "utf8");
console.log("third is: ", third);
