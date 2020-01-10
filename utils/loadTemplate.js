const child = require('child_process')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const spinner = require('ora')()
function loadTemplate(templatePath, name) {
    spinner.color = 'blue'
    spinner.text = "正在下载,请稍等"
    spinner.start()
    child.exec(`git clone ${templatePath} ${name}`, function (cloneErr) {
        if (cloneErr) {
            console.log(chalk.red(cloneErr))
            spinner.stop()
        } else {
            spinner.succeed('下载完成')
            spinner.info("开始安装依赖")
            spinner.color = 'blue'
            spinner.text = "安装中,请稍等"
            spinner.start()
            child.exec(`cd ${name} &&  npm install`, function (installErr, stdout) {
                if (installErr) {
                    spinner.stop()
                    console.log(chalk.red(installErr))
                    spinner.fail('安装失败,请手动安装依赖')
                } else {
                    spinner.succeed('安装完成')
                    spinner.info(chalk.green("项目启动中..."))
                    let worker = child.exec(`cd ${name} && npm start`, { maxBuffer:2048*2048 },function (startErr, stdout) {
                        if (startErr) {
                            spinner.fail('启动失败,请手动启动项目')
                        }
                    });
                    worker.stdout.on('data',(data)=>{
                        console.log(data.toString())
                    })
                }
            });
        }
    })
}
module.exports = loadTemplate;