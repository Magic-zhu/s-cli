const child = require('child_process');
const inquirer = require('inquirer');
const spinner = require('ora')();
const Rx = require('rxjs/Rx');
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function (type,arg,options) {
    Shell('n --version').subscribe((data)=>{
        spinner.succeed(data.toString().split(',')[0]);
        if(type=='list'){
            Shell('n lsr').subscribe((buffer)=>{
                console.log(buffer.toString().split(',')[0])
            });
        }
    },error => {
        Shell('sudo npm install n -g')
    })
}