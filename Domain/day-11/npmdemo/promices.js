const fs = require('fs').promises;

console.log('File operation continues');

fs.readFile("demo1.txt",'utf8').
    then( data1 =>{ console.log("file1 contents",data1); 
    return fs.readFile("demo2.txt",'utf8');
}).then(data2 => {
           console.log("file 2 content",data2);
           return fs.readFile("demo3.txt",'utf8');
}).catch( err=> {
    console.log(" error")
});

console.log("file operation ended");