const child = require('child_process');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const templates = require('../config/template.json');
const fs = require('fs');
const loadTemplate = require('../utils/loadTemplate');
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
        if(index == 4){
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
            return inquirer.prompt(questions)
        }
        loadTemplate(templates[index].git, name)
    }).then(answers => {

    })
}