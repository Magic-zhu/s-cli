const chalk = require('chalk');
module.exports = {
    success:(message)=>{
        console.log(chalk.white.bgGreen.bold(' SUCCESS ')+':'+message)
    },
    error:(message)=>{
        console.log(chalk.white.bgRed.bold(' ERROR ')+':'+message)
    },
    warn:(message)=>{
        console.log(chalk.white.bgYellow.bold(' WARN ')+':'+message)
    },
    info:(message)=>{
        console.log(chalk.white.bgBlue.bold(' INFO ')+':'+message)
    }
}