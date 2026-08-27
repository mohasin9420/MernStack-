const fs = require('fs')

const data = fs.readFileSync('demo1.txt','utf8');

console.log(data);

console.log("End of file");