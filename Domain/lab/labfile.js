import fs from 'node:fs';


fs.writeFileSync(
    'source.txt',
    'Mohasin Shaikh is learning Node.js'
);

if (fs.existsSync('source.txt')) {

  
    fs.copyFileSync(
        'source.txt',
        'destination.txt'
    );

    console.log('File copied successfully');

} else {

    console.log('Source file does not exist');

}