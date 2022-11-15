// OS - MODULE
// os module - built in module provides many useful  properties and methods for
// interacting with operating system as well as the server.

import os from "os";

// info about current user
const user = os.userInfo();
console.log("userInfo is: ", user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
