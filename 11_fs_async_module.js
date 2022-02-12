const {readFile,writeFile} = require('fs');
console.log("hi")

readFile("./A/first.txt",'utf8',(err,res) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    readFile("./A/second.txt","utf8",(err,res) =>{
        if(err){
            console.log(err);
            return;
        }
    const second = res;
    
    writeFile('./A/newFile.txt',`${first} ${second} `,{flag:'a'},(err,res)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log("first ............")

    })
    })
});
console.log("Bye")

