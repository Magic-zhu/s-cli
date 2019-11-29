var child = require('child_process');
var chalk = require('chalk');
var inquirer = require('inquirer');
var ora = require('ora');
module.exports = function(){
    let spinner = ora();
    spinner.color = 'red';
    spinner.text = '内容加载中';
    spinner.start();
    setTimeout(()=>{
        spinner.succeed("我是测试")
    },1000)
    setTimeout(()=>{
        spinner.fail("我是测试")
    },1000)
    setTimeout(()=>{
        spinner.warn("我是测试")
    },1000)
    setTimeout(()=>{
        spinner.info("我是测试")
    },1000)
}