var child = require('child_process');
var chalk = require('chalk');
var inquirer = require('inquirer');
module.exports = function(){
    let answerList = [];
    inquirer.prompt([
        {
            type:'list',
            name:'template',
            message:"请选择需要克隆的模板?",
            choices: [
                "vue",
                "vue+vuex",
                "react",
            ]
        }
    ]).then(answers=>{
        console.log(answers)
        inquirer.prompt([

        ])
    })
}