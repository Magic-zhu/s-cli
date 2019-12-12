const child = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const nunjucks = require('nunjucks');
/**
 * 根据模板生成文件
 * @param templatePath - 模板目录 绝对路径
 * @param templateName
 * @param filePath - 生成文件的位置 绝对路径
 * @param params <object> - 生成模板时的变量
 */
function createFile(templatePath,templateName,filePath,params) {
    spinner.start(chalk.blue("开始生成文件"));
    nunjucks.configure(templatePath);
    nunjucks.render(templateName, params, function (err, res) {
        if (err) console.log(chalk.red(err));
        else {
            let template = res.replace(/&#39;/g,"\'");
            fs.writeFile(filePath, template, 'utf8', (err, data) => {
                if (err) {
                    console.log(chalk.red(err));
                    spinner.fail("创建失败");
                    return
                }
                spinner.succeed("创建成功");
            })
        }
    })
}

module.exports = createFile;