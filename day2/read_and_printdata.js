const fs= require('fs');
fs.readFile('message.txt','utf8',(err,data)=>{
    if(err){
        console.error("Error reading file",err);
    }

    console.log('data read');
    console.log(data);
    
    
});