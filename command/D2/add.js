const child = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const templates = require('../../template/template.json');
module.exports = function (name) {
    fs.readdir("./", (err, data) => {
        if (err) {
            console.log(chalk.red(err))
        } else {
            if (data.includes('package.json') && data.includes('views')) {
                spinner.fail(chalk.red('当前目录不是项目目录或者不包含views文件夹'))
            } else {
                inquirer.prompt([{
                    type: 'input',
                    name: 'path',
                    message: "指定页面路径(默认为'views/xxxx')"
                }]).then(answers => {
                    spinner.start(chalk.blue("开始生成文件"));
                    let template =
`
<template>
    <d2-container>
        <template slot="header">new page</template>
        Hello World
    </d2-container>
</template>
<script>
    export default {
        name:'${name}',
        data:{
            return{
                
            }
        },
        beforeCreated(){
            
        },
        created(){
            
        },
        mounted(){
            
        },
        method:{
            
        }
    }
</script>
`
                    let PATH_TEMP = answers.path==''?`./src/views/${name}.vue`:`./src/views/${answers.path}/${name}.vue`;
                    fs.writeFile(path.resolve(PATH_TEMP), template, 'utf8', (err,data)=>{
                        if(err){
                            console.log(err)
                            spinner.fail("创建失败");
                            return
                        }
                        spinner.succeed("创建成功");
                    })
                })
            }
        }
    })
}