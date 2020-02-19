const fs = require('fs');

function readDir(path) {
    let states = fs.statSync(path);
    if(states.isDirectory()){
        let arr = fs.readdirSync(path);
        let result = arr.map(item=>{
            return { name:item,dir:fs.statSync(path+'/'+ item).isDirectory() }
        })
            return result
    }
    return false
}

const file  ={
    readDir,
}

module.exports =  file