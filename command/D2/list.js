const pluginsMap = require('../../config/D2CanInstallPlugins.json')
const chalk = require('chalk');
module.exports = () => {
    pluginsMap.forEach((item,index)=>{
        console.log(chalk.green(index+'-') + item.name + '>>>' + chalk.blue(item.packageName))
        console.log(chalk.blue("------------------------------"))
    })
}