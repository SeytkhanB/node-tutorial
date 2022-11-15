// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// OS --
// PATH --
// FS --
// HTTP --

const { john, peter } = require("./names.js");
const { sayHi } = require("./utils.js");
const data = require("./alternative.js");
require("./7-mind-grenade.js"); // logs "the sum is: 15" <-- you can do it, it works, but it is undesirable!

sayHi("susan");
sayHi(john);
sayHi(peter);
console.log(data);
