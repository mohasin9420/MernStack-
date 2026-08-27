import fs from 'node:fs';

// Create source.txt with some text
fs.writeFileSync(
    'source.txt',
    'Mohasin Shaikh is learning Node.js'
);

// Check if source.txt exists
if (fs.existsSync('source.txt')) {

    // Copy source.txt to destination.txt
    fs.copyFileSync(
        'source.txt',
        'destination.txt'
    );

    console.log('File copied successfully');

} else {

    console.log('Source file does not exist');

}