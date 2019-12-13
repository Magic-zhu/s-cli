const child = require('child_process');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
module.exports = function(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'npm_origin',
            message: "选择镜像源?",
            choices: [
                "npm原始",
                "淘宝"
            ]
        }
    ]).then(answers=>{
        if(answers.npm_origin=='npm原始'){
            child.exec('npm config set registry http://registry.npmjs.org/',(err,data)=>{
                if(!err) spinner.succeed('设置成功')
                else spinner.fail(err);
            })
        }
        if(answers.npm_origin=='淘宝'){
            child.exec('npm config set registry http://registry.npm.taobao.org/',(err,data)=>{
                if(!err) spinner.succeed('设置成功')
                else spinner.fail(err);
            })
        }
    })
}