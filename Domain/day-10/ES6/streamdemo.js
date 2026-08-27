import stream from 'node:stream';
import fs from 'node:fs'
const readstram =fs.createReadStream('example.txt' ,'utf8');

readstram.on('data', (chunks) => {
    console.log(chunks);
    
})
