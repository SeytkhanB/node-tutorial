import path from "path";

// returns platform spesific seperator
console.log(path.sep);

// Join all arguments together and normalize the resulting path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// Return the extension of the path, from the last '.' to end of string in the last portion of the path.
const base = path.basename(filePath);
console.log(base);

// Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
