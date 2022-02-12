const path = require('path');

const sep = path.sep;
console.log(sep);

const filePath = path.join('A','B','C','txt.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolutePath = path.resolve(__dirname,'A','B','C','txt.txt')
// const absolutePath = path.resolve(__dirname,filePath)
console.log(absolutePath);

