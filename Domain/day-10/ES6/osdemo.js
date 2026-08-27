import os from 'node:os'

console.log("Architecture"+ os.arch);
console.log(`Platform ${ os.platform}`);
console.log(`total memery:${os.totalmem}`);
console.log(`updtime ${os.uptime}`)
