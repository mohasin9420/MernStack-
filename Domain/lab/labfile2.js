import fs from 'node:fs';


fs.writeFileSync(
    'file1.txt',
    'Hello, I am learning Node.js.'
);


fs.writeFileSync(
    'file2.txt',
    'Node.js is used for backend development.'
);


const data1 = fs.readFileSync('file1.txt', 'utf8');


const data2 = fs.readFileSync('file2.txt', 'utf8');


const mergedData = data1 + '\n' + data2;


fs.writeFileSync('merged.txt', mergedData);

console.log('Files merged successfully');