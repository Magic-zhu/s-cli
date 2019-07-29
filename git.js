var child = require('child_process');
var chalk = require('chalk');
var inquirer = require('inquirer');
console.log(chalk.blue("commit中......"));
child.execSync("git add .");
console.log(chalk.yellow('请选择提交模板'));
inquirer
    .prompt([
        {
            type: 'list',
            name: 'commit',
            message: 'Commit type?',
            choices: [
                "feat",
                "fix",
                "update",
                "docs",
                "style",
                "refactor",
                "chore"
            ]
        },
        {
            type:'input',
            name:'message',
            message:"Commit Message?"
        }
    ])
    .then(answers => {
        var commit_message = answers.commit;
        var commitResult = child.execSync("git commit -am  " + commit_message ).toString();
        console.log(chalk.blue("push中......"));
        var pushResult = child.execSync("git push ").toString();
        console.log(chalk.green("完成"));
    });