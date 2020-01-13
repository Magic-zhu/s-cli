const child = require('child_process');
const inquirer = require('inquirer');
const spinner = require('ora')();
const Rx = require('rxjs/Rx');
const Shell = Rx.Observable.bindNodeCallback(child.exec);
module.exports = function () {
    Shell('n --version').subscribe((data)=>{
        spinner.succeed(data.toString())
    },error => {
        return Shell('sudo npm install n -g')
    }).subscribe()

}