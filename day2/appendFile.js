const fs = require('fs');


fs.appendFile('message.txt','Appended text from appendFile.js',err=>{
    if(err){
        console.error("Error appending file",err);
    }
})