const child = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const templates = require('../../config/template.json');
const nunjucks = require('nunjucks');
module.exports = function (name, reg) {
    inquirer.prompt([{
        type: 'input',
        name: 'path',
        message: "指定页面路径(默认为'views/xxxx')"
    }]).then(answers => {
        //生成文件
        spinner.start(chalk.blue("开始生成文件"));
        let tempPath = __dirname.replace(/\\/g, "/").split("command")[0] + 'templates/D2Admin/';
        nunjucks.configure(tempPath);
        nunjucks.render("newPage.njk", { name }, function (err, res) {
            if (err) console.log(chalk.red(err));
            else {
                let template = res;
                let PATH_TEMP = answers.path == '' ? `./src/views/${name}.vue` : `./src/views/${answers.path}/${name}.vue`;
                fs.writeFile(path.resolve(PATH_TEMP), template, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err)
                        spinner.fail("创建失败");
                        return
                    }
                    spinner.succeed("创建成功");
                })
            }
        })
        //注册路由
        if (reg) {
            console.log(chalk.yellow('正在执行:'), "注册路由");
            
        }
    })
}