const fs = require('fs');

function readDir(path) {
    let states = fs.statSync(path);
    if (states.isDirectory()) {
        let arr = fs.readdirSync(path);
        path = path=='/'?"":path;
        let result = arr.map(item => {
                try {
                    let stat = fs.statSync(path + '/' + item)
                    return { name: item, dir: stat.isDirectory() }
                } catch (error) {
                    return { name: item+'@已损坏路径', dir: false }
                }
        })
        return result
    }
    return false
}

const file = {
    readDir,
}

module.exports = file