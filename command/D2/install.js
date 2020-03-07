const pluginsMap = require('../../config/D2CanInstallPlugins.json');
const child = require('child_process');
const Rx = require('rxjs/Rx');
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = (index) =>{
    let bash = "npm install " + pluginsMap[index].packageName + '@' + pluginsMap[index].version + pluginsMap[index].type;
    Shell(bash).subscribe(res=>{

    },err=>{
        
    })
}