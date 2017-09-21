# praise-by-koa

### 1、功能介绍
- 用PHP+MySQL完成点赞接口，实现用户点击一次更新数据库点赞总数+1
- 用koa2+ES6封装PHP点赞接口，并建立路由。
- 将[praise](https://github.com/pengxiaohua/praise)项目迁移进入koa2，通过index/index路由进行访问
- 将用户点击事件通过axios连接到koa2点赞接口
- 对用户连续点击事件进行稀释(或叫节流)
- 基本测试：完成点赞接口的自动化测试(mocha)、点赞+1功能的自动化测试(karma)、真实页面的点击自动化测试(selenium-webdriver)

### 2、项目代码结构
为了适配更多浏览器，代码中和.es6后缀的文件同名的.js文件是babel转码后的es5文件，这里省掉了对应的.js文件
```shell
├── app.es6                        <-- node启动页面
├── config
│   ├── config.es6                 <-- 配置端口号、文件名
├── controller
│   ├── indexController.es6        <-- 创建路由
│   ├── initController.es6         <-- 分发路由
├── karma.conf.js                  <-- karma配置文件
├── models
│   ├── model.es6                  <-- 后端php接口的封装
├── public
│   ├── css
│   │   └── main.css               <-- css文件
│   └── js
│       ├── connect-api.es6        <-- axois连接koa点赞接口
│       ├── index.es6              <-- 点赞+1
│       ├── thumb.es6              <-- 实例化index.es6
├── server
│   ├── db.php
│   ├── get_count.php              <-- 获取当前点赞数原始php接口
│   └── post_count.php             <-- 点赞+1原始php接口
├── test
│   ├── e2e.js                     <-- 端对端自动化测试
│   ├── geckodriver                <-- 端对端自动化测试Firefox启动程序
│   ├── index.spec.js              <-- 点赞+1功能自动化测试
│   ├── server.es6                 <-- 点赞+1接口测试
└── views
    ├── index.html                 <-- 主页面
    └── layout.html                <-- 模板
```

**server**文件夹，存放的是php接口代码文件，为了方便查看放到了项目中，其实是可以任意放到其他地方，或者其他服务器上的，只需要给出后端接口地址就行。
**models**文件夹，存放的代码是ES6和koa对后端接口的封装
**controller**文件夹，存放的代码是对路由的处理
**public**文件夹，存放的代码是css和js
**views**文件夹，存放的代码是模板文件和html主页
**config**文件夹，存放的是配置端口号和文件名的代码
**test**文件夹，存放的是测试代码

### 3、安装
###### ① clone the repo
```shell
$ git clone https://github.com/pengxiaohua/news-responsive-by-react.git
$ cd news-responsive-by-react
```
###### ② Install dependencies
```shell
$ npm install
```

### 4、启动
此项目在XAMPP环境下运行的php接口和数据库,开启Apache服务器
```shell
localhost:8080
```
MySQL数据库创建：
```shell
('localhost','root','','praise',3506)
```
数据库名praise，接口3506，表名praise_count，2个字段‘id’和‘count’，id默认值为1，count默认值为0
浏览器输入：
```shell
http://localhost:8081/index/index
```

### 5、测试
###### ① 点赞+1功能自动化测试
```shell
karma start
```
###### ② 点赞+1接口自动化测试
```shell
cd test
 mocha server.js
```
###### ③端对端测试
使用的是 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)，安装[浏览器启动程序](https://github.com/mozilla/geckodriver/releases/)这里选择的是Firefox启动程序geckodriver macos v0.18.0版本,下载解压后和测试文件e2e.js放在一个目录下，开始测试
开启2个终端窗口
一个开启服务：
```shell
node app.js
```
另一个窗口测试：
```shell
cd test
node e2e.js
```










