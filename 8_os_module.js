const os = require('os')

const user = os.userInfo(); // info about current user
console.log(user);

console.log(os.uptime()); // method return the system uptime in seconds

const currentOs = {

    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs.name);