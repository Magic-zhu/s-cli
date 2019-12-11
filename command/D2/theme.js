const child = require('child_process');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();

module.exports = function () {
    inquirer.prompt([
        {
            type:'input',
            name: 'theme-name',
            message: "主题名称?"
        },
        {
            type:'input',
            name: 'theme-bg-color',
            message: "主题背景颜色?",
            default:"#EFF4F8"
        },
        {
            type:'input',
            name: 'theme-bg-mask',
            message: "主题背景图片遮罩颜色?",
            default:"#000"
        },
        {
            type:'input',
            name: 'theme-container-background-color',
            message: "页面容器背景色?",
            default:"#000"
        },
        {
            type:'input',
            name: 'theme-container-header-footer-background-color',
            message: "页面容器顶部和底部的背景颜色?",
            default:"#000"
        },
        {
            type:'input',
            name: 'theme-container-background-color',
            message: "页面容器内边框颜色?",
            default:"#cfd7e5"
        },
        {
            type:'input',
            name: 'theme-container-background-color',
            message: "页面容器外边框颜色?",
            default:"#cfd7e5"
        },
        {
            type:'input',
            name: 'theme-multiple-page-control-color',
            message: "页面容器标签文字颜色?",
            default:"#cfd7e5"
        },
        {
            type:'input',
            name: 'theme-multiple-page-control-color-active',
            message: "页面容器标签-选中状态文字颜色?",
            default:"#2f74ff"
        },
        {
            type:'input',
            name:'theme-multiple-page-control-border-color',
            message:'页面容器标签边框颜色?',
            default:'#cfd7e5'
        },
        {
            type:'input',
            name:'theme-multiple-page-control-border-color-active',
            message:'页面容器标签边框-选中状态颜色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:'theme-multiple-page-control-background-color',
            message:'页面容器标签背景色?',
            default:'#000'
        },
        {
            type:'input',
            name:'theme-multiple-page-control-background-color-active',
            message:'页面容器标签背-选中状态颜色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:'theme-menu-item-color-hover',
            message:'顶栏和侧边栏中展开的菜单 hover 状态下的颜色?',
            default:'#293849'
        },
        {
            type:'input',
            name:'theme-menu-item-background-color-hover',
            message:'顶栏和侧边栏中展开的菜单 hover 状态下的背景颜色?',
            default:'#ecf5ff'
        },
        {
            type:'input',
            name:"theme-header-item-color",
            message:'顶栏上的文字颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-header-item-color-hover",
            message:'顶栏上的项目在 hover 时颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-header-item-background-color-hover",
            message:'顶栏上的项目在 hover 时背景色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:"theme-header-item-color-focus",
            message:'顶栏上的项目在 focus 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-header-item-background-color-focus",
            message:'顶栏上的项目在 focus 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme-header-item-color-active",
            message:'顶栏上的项目在 active 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-aside-item-color",
            message:'侧边栏上的文字颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-item-color-hover",
            message:'侧边栏上的项目在 hover 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-aside-item-background-color-hover",
            message:'侧边栏上的项目在 hover 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme-aside-item-color-focus",
            message:'侧边栏上的项目在 focus 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-aside-item-background-color-focus",
            message:'侧边栏上的项目在 focus 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme-aside-item-color-active",
            message:'侧边栏上的项目在 active 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme-aside-item-background-color-active",
            message:'侧边栏上的项目在 active 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-icon-color",
            message:'侧边栏菜单为空的时候图标的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-text-color",
            message:'侧边栏菜单为空的时候文字的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-background-color",
            message:'侧边栏菜单为空的时候背景的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-background-color",
            message:'侧边栏菜单为空的时候图标的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-text-color-hover",
            message:'侧边栏菜单为空的时候hover状态下的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme-aside-menu-empty-background-color-hover",
            message:'侧边栏菜单为空的时候hover状态下的背景颜色?',
            default:'#000'
        }
    ]).then(answers=>{
        console.log(answers)
    })
}
