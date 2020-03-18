const path = require('path');
const fs = require('fs');
const message = require('../../utils/message');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const copyDir = require('../../utils/copyDir');
function registerRoute(params){
    message.info("读取app.json文件");
    Reader(path.resolve("./app.json"))
        .toPromise()
        .then(buffer => {
            let config = JSON.parse(buffer.toString())
            if(!params.subpackage){ //主包
                config.pages.push(`pages/${name}/index`)
            }else{ //自定义分包

            }
            return Writer(path.resolve("./app.json"), JSON.stringify(config)).toPromise()
        })
        .then(() => {
            message.success('路由添加成功')
        })
        .catch(err => {
            message.error(err)
        })    
}

/**
 * 创建新页面 
 * @param {*} dest - 目标路径
 */
function createNewPage(dest){
    copyDir('../../templates/weapp/new_page',dest)
}
/**
 * 创建新的组件
 * @param {*} dest 
 */
function createNewComponent(dest){
    
}

module.exports = function (name, e) {

    let generate_path = e.path ? path.resolve("./") + e.path:path.resolve("./") + "/pages/"+name;

    if (e.component) {
        
    }

    if (e.page) {
        createNewPage(generate_path)
        registerRoute({name,customPath:e.path,subpackage:e.subpackage})
    }

}