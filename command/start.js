const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const child = require('child_process');
module.exports = function (path) {
    child.execSync(`parcel `)
}