const path = require('path');
const fs = require('fs');
const message = require('../../utils/message');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);

function registerRoute(params){
    message.info("读取app.json文件");
    Reader(path.resolve("./app.json"))
        .toPromise()
        .then(buffer => {
            let config = JSON.parse(buffer.toString())
            config.pages.push(`pages/${name}/index`)
            return Writer(path.resolve("./app.json"), JSON.stringify(config)).toPromise()
        })
        .then(() => {
            message.success('路由添加成功')
        })
        .catch(err => {
            message.error(err)
        })    
}

function createNewPage(name){

}

function createNewComponent(){

}

module.exports = function (name, e) {

    let generate_path = e.path ? path.resolve("./") + e.path:path.resolve("./") + "/pages";

    if (e.component) {
        console.log(`${generate_path}/${name}`)
    }

    if (e.page) {

        registerRoute({name,customPath:e.path,subpackage:e.subpackage})
    }

}