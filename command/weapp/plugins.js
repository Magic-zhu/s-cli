const path = require('path');
const fs = require('fs');
const message = require("../../utils/message");
const beautify = require('beautify');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const plugins = require("../../config/weappPlugins.json");
const inquirer = require('inquirer');
const copyDir = require('../../utils/copyDir');
module.exports = function () {
    let answers = [];
    message.info('插件读取中...')
    inquirer.prompt([{
        type: 'checkbox',
        name: 'weappPlugins',
        message: "请选择需要安装的组件?",
        choices: plugins
    }])
    .then(ans=>{
        answers = ans.weappPlugins;
        answers.forEach((item)=>{
            let src = __dirname.replace(/\\/g, "/").split("command")[0]+'templates/weapp/plugins/'+ item
            copyDir(src,path.resolve("./components/" + item + "/")) 
        })
        return Reader(path.resolve('./app.json'), 'utf8').toPromise()
    })
    .then(buffer => {
        let res = JSON.parse(buffer.toString());
        res.usingComponents = res.usingComponents?res.usingComponents:{};
        answers.forEach(item=>{
            res.usingComponents[item]=`/components/${item}/index`;
        })
        let string = beautify(JSON.stringify(res), {format: 'json'});
        return Writer(path.resolve('./app.json'), string, 'utf8').toPromise()
    })
    .then(() => {
        message.success('安装成功')
    })    
    .catch(err=>{
        message.error(err);
    })
}