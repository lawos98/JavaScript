const fs = require('fs');

module.exports = function check(path){
    path = './' + path;
    try{
        if(fs.existsSync(path)){
            if(fs.statSync(path).isFile()){
                return 0
            }
            else if(fs.statSync(path).isDirectory()){
                return 1
            }
            return 2
        }else{
            return -1
        }
    }catch(err){
        console.error(err);
    }
}

