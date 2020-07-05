# 介绍 (💦开发中)
![image](assets/Ares.png)

![image](https://img.shields.io/badge/Version-1.1.2-green.svg)  ![image](https://img.shields.io/badge/node->10-red.svg)

Ares是一个简单的脚手架,主要是为了解决每次创建项目时都要copy代码，配置插件等繁琐的工作。<br>

 - 📦 开箱即用
 - 🚗 懒人命令
 - 🚀 GUI可视化操作 💦 开发中
 - 📖 一些常用插件和npm的整理和收集 提供一键安装的命令 💦 开发中

目前支持三个版块

1. D2(超级好用的中后台模板) 👉<a href='#d2'>跳转</a>  [官网](https://d2.pub/zh/doc/d2-admin/)
2. 微信小程序 👉<a href='#weapp'>跳转</a>
3. 快捷工具

## 安装

直接执行下面的命令,安装缓慢的可以切换淘宝镜像源

```shell
npm install @magic-zhu/ares -g
```


## 使用

### 🚀 快捷工具

`切换npm镜像源`
```shell
ares npm
```
![image](assets/npm.png)

`切换node版本`
>集成tj大神的n - :exclamation:不支持windows

+ `ares node lsr`:显示所有可安装的node版本
+ `ares node ls`:显示所有已安装的node版本
+ `ares node install <version>`:不带版本的时候安装最新稳定版本的node,带版本的时候安装指定版本的node
+ `ares node use`:会出现一个列表 选择想要使用的版本按回车即可

<div id='d2'></div>

## ✈️ D2Admin

#### 创建项目

:exclamation:快速创建D2
d2 init 
```

##### 新增页面

```shell
d2 add 
```

##### 主题生成

执行下列命令之后会有一个交互界面，填写完整信息之后，重启项目就能看到新添加的主题了

```shell
ares d2 theme 
```
<div id='weapp'></div>

##  🍀原生微信小程序

>原生微信小程序部分所有的命令都是以`ares weapp`开头

⚠命令需要在小程序项目根目录下执行 (app.json同级目录)

### 新建页面

>脚手架会自动注册路由

```bash
weapp create <name> --page 
weapp create <name> -p //--page的简写
weapp create <name> --page  --subpackage
weapp create <name> -p -s
weapp create <name> -p -s <subpackageName> --path <path>
```
>-p可以省略

`name` 是新建页面的名字<br>
`--page`或者`-p` 表示新建的是页面<br>
`--subpackage`或者`-s` 表示这是一个分包<br>
`--path` 指定要新建的路径 <br>

**🍀示例**

+ `weapp create demo` 最简单的示例  默认创建在 /pages/demo 这个目录下面
+ `weapp create textPage --path /pages/testModule` 创建在 /pages/testModule/testPage 
+ `weapp create hero -s packageA` 默认创建在 /packageA/pages/hero  
+ `weapp create hero -s packageA --path /pages/testModule ` 创建在/packageA/pages/testModule/hero

### 新建组件

大体上和新建页面类似

>不指定path的情况下 默认/components

```bash
ares weapp create <name> -c
ares weapp create <name> --component
ares weapp create <name> -c --path <path>
```
### 安装脚手架提供的组件(magic-ui-weapp)

脚手架带了一套方便修改源码的组件库具体请查看 👉[文档]()

```bash
ares weapp plugins
```

![示例图片](/assets/ares_weapp_plugins.png)

选择组件后会自动将组件安装到`components`文件夹下并自动在全局注册好

![示例图片](/assets/ares_weapp_plugins_install.png)