// fs - stands for "file system"
// when it comes to file module there are two flavors
// async (non blocking) fs module & sync (blocking) fs module

// ASYNCHRONOUS FS MODULE
const { readFile, writeFile } = require("fs");

// writeFile("./content/first-async.txt", "is it working?", (err, result) => {
//   if (err) {
//     console.log("err is: ", err);
//     return;
//   }
//   console.log("result is: ", result);
// });

readFile("./content/first.txt", "utf9", (err, result) => {
  if (err) {
    console.log("err is: ", err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf9", (err, result) => {
    if (err) {
      console.log("err is: ", err);
      return;
    }
    const second = result;

    writeFile(
      "./content/third-async.txt",
      `Here is the result of third async: \n ${first} \n ${second}`,
      (err, result) => {
        if (err) {
          console.log("err is: ", err);
          return;
        }
        console.log("result is: ", result);
      }
    );
  });
});
