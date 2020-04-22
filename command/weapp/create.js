const path = require('path');
const fs = require('fs');
const message = require('../../utils/message');
const Rx = require('rxjs/Rx');
const beautify = require('beautify');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const copyDir = require('../../utils/copyDir');

/**
 * 注册页面路由
 * @param {*} params 
 */
function registerRoute(params){
    message.info("读取app.json文件");
    Reader(path.resolve("./app.json"))
        .toPromise()
        .then(buffer => {
            let config = JSON.parse(buffer.toString())
            let route = params.path?`${params.path}/${params.name}/index`:`pages/${params.name}/index`;
            if(!params.subpackage){ //主包
                config.pages.push(route);
            }else{ //自定义分包
                let index = config.subpackages.findIndex((item)=>{
                    return item.root == params.subpackage                                    
                })
                config.subpackages[index].pages.push(route);
            }
            let format_string = beautify(JSON.stringify(config),{format: 'json'});
            return Writer(path.resolve("./app.json"),format_string).toPromise()
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
    let src = __dirname.replace(/\\/g, "/").split("command")[0] + '/templates/weapp/new_page'
    copyDir(src,dest)
}

/**
 * 创建新的组件
 * @param {*} dest 
 */
function createNewComponent(dest){
    let src = __dirname.replace(/\\/g, "/").split("command")[0] + '/templates/weapp/new_component'
    copyDir(src,dest)
}

module.exports = function (name, e) {

    let generate_path;

    if (e.component) {
        generate_path = e.path ? path.resolve("./") + e.path +"/"+name:path.resolve("./") + "/components/"+name;
        createNewComponent(generate_path)
        return 
    }
    if (e.subpackage){
        generate_path = e.path ? path.resolve("./") + "/" + e.subpackage + e.path+"/"+name:path.resolve("./") + "/" + e.subpackage + "/pages/"+name;
    }else{
        generate_path = e.path ? path.resolve("./") + e.path+"/"+name:path.resolve("./") + "/pages/"+name;
    }
    createNewPage(generate_path)
    registerRoute({name,path:e.path,subpackage:e.subpackage})

}