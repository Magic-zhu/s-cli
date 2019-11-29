var child = require('child_process');
var chalk = require('chalk');
var inquirer = require('inquirer');
var plugins = require('../template/plugins.json');
var spinner = require('ora')();
module.exports = function (type, arg) {
    switch (type) {
        case 'normal':
            console.log(chalk.magenta("默认安装路径为当前目录,指定路径请使用 --path"))
            break;
        case 'path':
            let path = arg;
            break
        case 'list':
            plugins.map((item, index) => {
                console.log(chalk.yellow(item.name))
            })
            spinner.succeed(chalk.green('目录读取成功'))
            break
        default:
            break;
    }
}