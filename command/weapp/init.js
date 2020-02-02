const path = require('path')
const child = require('child_process')
const spinner = require('ora')()
const Rx = require('rxjs/Rx')
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function (name) {
    spinner.start()
    Shell(`git clone https://gitee.com/magic-zhu/template-weapp.git ${name}`).subscribe(res=>{
        spinner.succeed('初始化成功')
    })
}