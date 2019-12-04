const child = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const templates = require('../../config/template.json');
const nunjucks = require('nunjucks');
module.exports = function (name) {
    inquirer.prompt([{
        type: 'input',
        name: 'path',
        message: "指定页面路径(默认为'views/xxxx')"
    }]).then(answers => {
        // spinner.start(chalk.blue("开始生成文件"));
        nunjucks.renderString('hahah {{name}}',{name},function(err,res){
            if(err) console.log(chalk.red(err));
            else console.log(res);
        })
        // let PATH_TEMP = answers.path==''?`./src/views/${name}.vue`:`./src/views/${answers.path}/${name}.vue`;
        // fs.writeFile(path.resolve(PATH_TEMP), template, 'utf8', (err,data)=>{
        //     if(err){
        //         console.log(err)
        //         spinner.fail("创建失败");
        //         return
        //     }
        //     spinner.succeed("创建成功");
        // })
    })
}