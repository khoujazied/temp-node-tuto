const {readFileSync,writeFileSync, writeFile} = require('fs');


// const read = fs.readFileSync('./A/first.txt','utf8');
// console.log(read);

// console.log(readFileSync('./A/first.txt','utf8'))

// writeFileSync('./A/test.txt',"Abcd"); // bch nekteb fi file Abcd 

// => ken el file test. txt mch mawjouda tsirelha el creation
// => fl cas hedhi ken el file mawjoud el klem eli fehaa yetfaskh w yet7at abcd

// => ken nheb el klem yo9ed

writeFileSync("./A/test.txt"," Test", {flag:'a'})



