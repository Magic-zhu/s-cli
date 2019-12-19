## 介绍 (未开发完)
![image](assets/Ares.png)

![image](https://img.shields.io/badge/Version-1.0.0-green.svg)

Ares是一个简单的脚手架,主要是为了解决每次创建项目时都要copy代码，配置插件等繁琐的工作。<br>
提供了一些开箱即用的模板（持续更新，不限于前端，**热烈欢迎提供大家写好的现成模板**）。重点模板是超级好用的[D2Admin](https://github.com/d2-projects/d2-admin)<br>

模板编号 | 模板名称|简介
---|---|---
0| Vue极速模板-非官方脚手架| 纯净快速的模板
1| Vue移动端集成方案-官方脚手架版|
2| Vue/PWA集成方案-官方脚手架版|
3| D2admin基础模板(不使用任何D2插件)|超级好用的后台模板
4| D2admin基础模板(选配D2插件)|
5| D2admin完整模板(全功能,包括使用示例)|有很多很棒的功能，无需二次开发

:neckbeard:会在网上收集一些好用的插件或者包并注明用途,然后提供快速安装。<br>
:alien:会集成一些方便的小功能(比如切换npm镜像源,切换node版本之类的)<br>

## 安装

直接执行下面的命令,安装缓慢的可以切换淘宝镜像源

```shell
npm install @magic-zhu/ares -g
```

## 使用

#### D2Admin部分

D2部分所有的命令都是以`ares d2`开头

###### 创建项目

->快速创建D2的简单模板
```shell
ares d2 create 
```
->快速创建D2的完整模板
```shell
ares d2 create -c
```
###### 新增页面

```shell
ares d2 add 
```

###### 主题生成

执行下列命令之后会有一个交互界面，填写完整信息之后，重启项目就能看到新添加的主题了

```shell
ares d2 theme 
```

#### 初始化项目模板


##### 正常初始化
```shell
ares init <name>
```
##### 快速创建
