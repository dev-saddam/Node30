const { error } = require('console');
const fs = require('fs');
const content = "Hello world from NODE.JS !!!";
fs.writeFile('message.txt',content,err=>{
    if(err){
        console,error("Error writing file",err);
    }else{
        console.log("fie writing comleted");
        
    }
})