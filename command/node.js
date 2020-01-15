const child = require('child_process');
const inquirer = require('inquirer');
const spinner = require('ora')();
const Rx = require('rxjs/Rx');
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function (type,arg) {
    Shell('n --version').subscribe((buffer)=>{
        spinner.succeed(buffer.toString().split(',')[0]);
        spinner.warn('版本需要在6.1以上');
        let bash ='';//脚本字符串
        switch (type){
            case "lsr":
                bash = 'n lsr --all';
                break
            case "ls":
                bash = 'n ls';
                break
            case "install":
                base = arg?'n lts':`n ${arg}`;
                break
            case "use":
                base = 'n';
                break
        }
        Shell(bash).subscribe((buffer)=>{
            console.log(buffer.toString().split(',')[0])
        });
    },error => {
        spinner.start("相关模块下载中...");
        Shell('sudo npm install n -g').subscribe(()=>{
            spinner.stop();
            spinner.succeed('下载成功');
        },error=>{
            spinner.fail(error)
        })
    })
}