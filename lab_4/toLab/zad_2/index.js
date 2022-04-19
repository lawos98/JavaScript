const fs = require('fs');

const word = process.argv[2];

const path = './' + word;

if(fs.existsSync(path)){
    if(fs.statSync(path).isFile()){
        console.log("File exists");
        console.log(fs.readFileSync(path, 'utf-8'));
    }
    else if(fs.statSync(path).isDirectory()){
        console.log("Directory exist");
    }
}else{
    console.log("Incorrect path");
}

