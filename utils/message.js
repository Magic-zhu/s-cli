const chalk = require('chalk');
module.exports = {
    success:(message)=>{
        console.log(chalk.white.bgGreen.blod('SUCCESS')+':'+message)
    },
    error:(message)=>{
        console.log(chalk.white.bgRed.blod('ERROR')+':'+message)
    },
    warn:(message)=>{
        console.log(chalk.white.bgYellow.blod('WARN')+':'+message)
    },
    info:(message)=>{
        console.log(chalk.white.bgBlue.blod('INFO')+':'+message)
    }
}