var child = require('child_process');
var chalk = require('chalk');
var inquirer = require('inquirer');
module.exports = function(){
    let answerList = [];
    inquirer.prompt([
        {
            type:'list',
            name:'template',
            message:"请选择需要克隆的基础模板?",
            choices: [
                "Vue",
                "Vue+Vuex",
                "React",
                "React+Redux"
            ]
        }
    ]).then(answers=>{
        console.log(answers.template)
        let questions = [];
        switch(answers.template){
            case "Vue":
                questions = [
                    {
                        type:'list',
                        name:'css',
                        message:"请选择css预处理器?",
                        choices: [
                            "less",
                            "scss",
                            "stylus",
                        ]
                    },
                    {
                        type:'list',
                        name:"ui",
                        message:"请选择UI库",
                        choices:[
                            "element-ui",
                            'mint-ui',
                            "cube-ui",
                            "不使用"
                        ]
                    }
                ];
                break
        }
        inquirer.prompt(questions).then(answers=>{

        })
    })
}