const child = require('child_process');
const fs = require('fs');
const path = require('path');
const message = require('../utils/message');
const inquirer = require('inquirer');
const spinner = require('ora')();
const Rx = require('rxjs/Rx');
const writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const reader = Rx.Observable.bindNodeCallback(fs.readFile);
const shell = Rx.Observable.bindNodeCallback(child.exec);
const templates = require('../config/template.json');
const plugins = require("../config/D2AdminPlugins");
const loadTemplate = require('../utils/loadTemplate');
module.exports = function () {
    let _answer = {
        template:null,
        name:'myapp',
    };
    inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: "请选择模板?",
            choices: templates
        },
        {
            type: 'input',
            name: 'name',
            message: "请输入项目名称?",
            default:"myapp"
        }
    ]).then(answers => {
        let index = parseInt(answers.template);
        _answer.template = index;
        _answer.name = answers.name;
        switch (index){
            case 4:
                let questions = [
                    {
                        type: 'checkbox',
                        name: 'D2AdminPlugins',
                        message: "请选择需要用到的插件?",
                        choices: plugins
                    },
                ];
                return inquirer.prompt(questions)
            default:
                loadTemplate(templates[index].git, answers.name);
                break
        }
    }).then(answers => {
        console.log(answers)
        // let loader = Rx.Observable.bindCallback(loadTemplate(templates[index].git, answers.name))
        reader(path.resolve('./package.json')).toPromise().then(buffer=>{
            console.log(buffer.toString())
        },err=>{
            message.error(err)
        })
    })
}