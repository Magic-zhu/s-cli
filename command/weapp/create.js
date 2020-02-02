const path = require('path');
const fs = require('fs');
const message = require('../../utils/message');
const spinner = require('ora')();
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);

module.exports = function (name,e) {

    let generate_path = e.path?e.path:'./'
    generate_path = path.resolve(generate_path)

    if(e.component){
        console.log(path)
    }

    if(e.page){

    }

}