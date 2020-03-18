const child = require('child_process')
const message = require("../../utils/message")
const Rx = require('rxjs/Rx')
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function (name) {
    message.info('初始化项目中....⌛️')
    let sh = `git clone https://gitee.com/magic-zhu/template-weapp.git ${name}`
    Shell(sh)
    .subscribe(()=>{
        message.success('初始化成功')
    })
}