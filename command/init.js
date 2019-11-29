var child = require('child_process');
// var path =  require('path'); 
var chalk = require('chalk');
var inquirer = require('inquirer');
var spinner = require('ora')();
let templates = require('../template/template.json');
module.exports = function(){
    let answerList = [];
    inquirer.prompt([
        {
            type:'list',
            name:'template',
            message:"请选择模板?",
            choices: templates
        }
    ]).then(answers=>{
        let index = parseInt(answers.template);
        spinner.color = 'blue';
        spinner.text = "正在下载请稍等";
        // spinner.start();
        child.exec(`cd ${'aaaa' } &&  npm install`,function(err,stdout){
            console.log(chalk.red(stdout));
        });
        child.exec(`cd ${'/aaaa' } &&  npm start`,function(err,stdout){
            console.log(chalk.red(stdout));
        });
        // child.exec(`git clone ${templates[index].git} aaaa`,function(err){
        //     if(err){
        //         console.log(chalk.red(err));
        //     }else{
        //         spinner.succeed(chalk.green('下载完成'));
        //     }
        //     child.execSync("ls");
        // })
        // let questions = [];
        // switch(answers.template.split("-")[0]){
        //     case "001":
        //         questions = [
        //             {
        //                 type:'list',
        //                 name:'001-css',
        //                 message:"请选择css预处理器?",
        //                 choices: [
        //                     "less",
        //                     "scss",
        //                     "stylus",
        //                 ]
        //             },
        //         ];
        //         break    
        // }
        // return inquirer.prompt(questions)
    }).then(answers=>{
        // console.log(chalk.red(answers))
    })
}