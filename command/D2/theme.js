const child = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spinner = require('ora')();
const createFile =  require('../../utils/createFile');
module.exports = function () {
    inquirer.prompt([
        {
            type:'input',
            name: 'title',
            message: "主题显示名称?",
            default:"自定义"
        },
        {
            type:'input',
            name: 'preview',
            message: "主题缩略图地址?",
            default:"image/theme/d2/preview@2x.png"
        },
        {
            type:'input',
            name: 'backgroundImage',
            message: "主题背景图地址?",
            default:""
        },
        {
            type:'input',
            name: 'theme_name',
            message: "主题名称?",
            default:"custom"
        },
        {
            type:'input',
            name: 'theme_bg_color',
            message: "主题背景颜色?",
            default:"#EFF4F8"
        },
        {
            type:'input',
            name: 'theme_bg_mask',
            message: "主题背景图片遮罩颜色?",
            default:"#000"
        },
        {
            type:'input',
            name: 'theme_container_background_color',
            message: "页面容器背景色?",
            default:"#fff"
        },
        {
            type:'input',
            name: 'theme_container_header_footer_background_color',
            message: "页面容器顶部和底部的背景颜色?",
            default:"#000"
        },
        {
          type:"input",
          name:'theme_container_border_inner',
          message:'页面容器内边框颜色',
          default:'#cfe7d5'
        },
        {
            type:"input",
            name:'theme_container_border_outer',
            message:'页面容器外边框颜色',
            default:'#cfe7d5'
        },
        {
            type:'input',
            name: 'theme_multiple_page_control_color',
            message: "页面容器标签文字颜色?",
            default:"$color-text-normal"
        },
        {
            type:'input',
            name: 'theme_multiple_page_control_color_active',
            message: "页面容器标签_选中状态文字颜色?",
            default:"#2f74ff"
        },
        {
            type:'input',
            name:'theme_multiple_page_control_border_color',
            message:'页面容器标签边框颜色?',
            default:'#cfd7e5'
        },
        {
            type:'input',
            name:'theme_multiple_page_control_border_color_active',
            message:'页面容器标签边框_选中状态颜色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:'theme_multiple_page_control_background_color',
            message:'页面容器标签背景色?',
            default:'#000'
        },
        {
            type:'input',
            name:'theme_multiple_page_control_background_color_active',
            message:'页面容器标签背_选中状态颜色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:'theme_menu_item_color_hover',
            message:'顶栏和侧边栏中展开的菜单 hover 状态下的颜色?',
            default:'#293849'
        },
        {
            type:'input',
            name:'theme_menu_item_background_color_hover',
            message:'顶栏和侧边栏中展开的菜单 hover 状态下的背景颜色?',
            default:'#ecf5ff'
        },
        {
            type:'input',
            name:"theme_header_item_color",
            message:'顶栏上的文字颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_header_item_color_hover",
            message:'顶栏上的项目在 hover 时颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_header_item_background_color_hover",
            message:'顶栏上的项目在 hover 时背景色?',
            default:'#FFF'
        },
        {
            type:'input',
            name:"theme_header_item_color_focus",
            message:'顶栏上的项目在 focus 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_header_item_background_color_focus",
            message:'顶栏上的项目在 focus 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme_header_item_color_active",
            message:'顶栏上的项目在 active 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_header_item_background_color_active",
            message:'顶栏上的项目在 active 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme_aside_item_color",
            message:'侧边栏上的文字颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_item_color_hover",
            message:'侧边栏上的项目在 hover 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_aside_item_background_color_hover",
            message:'侧边栏上的项目在 hover 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme_aside_item_color_focus",
            message:'侧边栏上的项目在 focus 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_aside_item_background_color_focus",
            message:'侧边栏上的项目在 focus 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme_aside_item_color_active",
            message:'侧边栏上的项目在 active 时的颜色?',
            default:'#2f74ff'
        },
        {
            type:'input',
            name:"theme_aside_item_background_color_active",
            message:'侧边栏上的项目在 active 时的背景颜色?',
            default:'#fff'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_icon_color",
            message:'侧边栏菜单为空的时候图标的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_text_color",
            message:'侧边栏菜单为空的时候文字的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_background_color",
            message:'侧边栏菜单为空的时候背景的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_icon_color_hover",
            message:'侧边栏菜单为空的时候图标的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_text_color_hover",
            message:'侧边栏菜单为空的时候hover状态下的颜色?',
            default:'#000'
        },
        {
            type:'input',
            name:"theme_aside_menu_empty_background_color_hover",
            message:'侧边栏菜单为空的时候hover状态下的背景颜色?',
            default:'#000'
        }
    ]).then(answers=>{
        spinner.info('目录创建中...');
        let themeName = answers['theme_name'];
        let dirPath = path.resolve('./src/assets/style/theme/'+themeName);
        let tempPath = __dirname.replace(/\\/g, "/").split("command")[0] + 'templates/D2Admin/';
        fs.mkdir(dirPath,(err)=>{
            if(err) throw err;
            else{
                spinner.succeed('目录生成成功');
                spinner.info('开始生成主题');
                createFile(tempPath,'themeIndex.njk',dirPath+'/index.scss',{});
                createFile(tempPath,'themeSetting.njk',dirPath+'/setting.scss',answers);
                spinner.info('开始注册主题');
                fs.readFile(path.resolve('./src/setting.js'),'utf8',(err,buffer)=>{
                    let data = buffer.toString();
                    let reg = /list: \[[\s\S]*\]\n/;
                    let result = data.match(reg)[0];
                    let reg2 = /list: \[[\s\S]*}/;
                    result = result.match(reg2)[0];
                    let tempPath = __dirname.replace(/\\/g, "/").split("command")[0] + 'templates/D2Admin/';
                    createFile(tempPath,'themeJsSetting.njk',path.resolve("./src/setting.js"),{
                        old:result,
                        title:answers.title,
                        name:themeName,
                        backgroundImage:answers.backgroundImage,
                        preview:answers.preview
                    })
                })
                fs.readFile(path.resolve('./src/assets/style/theme/register.scss'),'utf8',(err,data)=>{
                    let oldData = data.toString();
                    let newData = oldData +`

@import '~@/assets/style/theme/${themeName}/index.scss';`
                    fs.writeFile(path.resolve('./src/assets/style/theme/register.scss'),newData,(err,data)=>{
                        if(err) spinner.fail(err);
                        else spinner.succeed(chalk.green('注册完成'))
                    });
                })
            }
        })
    })
}
