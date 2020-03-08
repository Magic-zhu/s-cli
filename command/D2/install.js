const pluginsMap = require('../../config/D2CanInstallPlugins.json');
const child = require('child_process');
const Rx = require('rxjs/Rx');
const Shell = Rx.Observable.bindNodeCallback(child.exec);
const message = require('../../utils/message');
module.exports = (index) =>{
    message.info('正在安装...请耐心等待')
    let bash = "npm install " + pluginsMap[index].packageName + '@' + pluginsMap[index].version + pluginsMap[index].type;
    Shell(bash).subscribe(res=>{
        message.success('安装成功')
    },err=>{
        message.error(err)
    })
}