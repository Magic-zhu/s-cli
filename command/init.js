const child = require('child_process');
const path =  require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const templates = require('../template/template.json');
const fs = require('fs');
module.exports = function (name) {
    let answerList = [];
    inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: "请选择模板?",
            choices: templates
        }
    ]).then(answers => {
        let index = parseInt(answers.template);
        console.log(index)
        switch (index) {
            case 3,5:
                loadTemplate(index, name)
                break
            case 4:
                let questions = [
                    {
                        type: 'checkbox',
                        name: 'D2AdminPlugins',
                        message: "请选择需要用到的插件?",
                        choices: [
                            "表格导出",
                            "表格导入",
                            "时间日期过滤器",
                            ""
                        ]
                    },
                ];
                ;
                return inquirer.prompt(questions)
        }

    }).then(answers => {

    })
}

function loadTemplate(index, name) {
    spinner.color = 'blue';
    spinner.text = "正在下载,请稍等";
    spinner.start();
    child.exec(`git clone ${templates[index].git} ${name}`, function (err) {
        if (err) {
            console.log(chalk.red(err));
        } else {
            spinner.succeed('下载完成');
            spinner.info("开始安装依赖");
            spinner.color = 'blue';
            spinner.text = "安装中,请稍等";
            spinner.start();
            child.exec(`cd ${name} &&  npm install`, function (err, stdout) {
                if (err) {
                    console.log(chalk.red(err))
                } else {
                    spinner.succeed('安装完成');
                    spinner.info(chalk.yellow("项目启动中..."))
                    child.exec(`cd ${name} &&  npm start`, function (err, stdout) {
                        if (err) {
                            console.log(chalk.red(err))
                            spinner.fail('安装失败,请手动安装依赖');
                        } else {
                            console.log(stdout)
                            spinner.succeed('项目启动完成')
                        }
                    });
                }
            });
        }
    })
}