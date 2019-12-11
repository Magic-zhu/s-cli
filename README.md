## 介绍 Ver1.0.0

Ares是一个简单的脚手架,主要是为了解决每次创建项目时都要copy代码，配置插件等繁琐的工作。<br>
提供了一些开箱即用的模板。重点模板是超级好用的[D2Admin](https://github.com/d2-projects/d2-admin)<br>
Ares提供了一个注册平台，让用户能够注册一个命令，保存用户指定的文件。然后在需要的地方在通过一个简单的命令生成。(未更新上去)<br>
除了自定义的部分也会在网上收集一些插件内置进去。(未更新上去)<br>

### 安装

```shell
npm install @magic-zhu/ares -g
```

### 使用

#### D2Admin部分

D2部分所有的命令都是以`ares d2`开头

###### 创建项目
```shell
ares create
```

#### 初始化项目模板

##### 正常初始化
```shell
ares init <name>
```
##### 快速创建
