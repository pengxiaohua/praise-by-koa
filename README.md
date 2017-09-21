# praise-by-koa
### 功能介绍
- 用PHP+MySQL完成点赞接口，实现用户点击一次更新数据库点赞总数+1
- 用koa2+ES6封装PHP点赞接口，并建立路由。
- 将[praise](https://github.com/pengxiaohua/praise)项目迁移进入koa2，通过index/index路由进行访问
- 将用户点击事件通过axios链接到koa2点赞接口
- 对用户点击事件进行稀释，提取点赞和稀释函数为函数式编程
- 测试：完成点赞接口的自动化测试、点赞+1功能的自动化测试、真是页面的点击自动化测试

## 项目结构
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
    
## 下载
#### 下载当前项目
```shell
git clone https://github.com/pengxiaohua/praise-by-koa
cd praise-by-koa 
```

## 安装
#### 安装node_modules
```shell
npm install 
```

## 启动
#### 本人是在XAMPP环境下运行的php接口和数据库
```shell
localhost:8080
```
##### MySQL数据库创建
```shell
('localhost','root','','praise',3506)
```
##### 数据库名praise，接口3506，表名praise_count，2个字段‘id’和‘count’，id默认值为1，count默认值为0。

##### 浏览器输入 
```shell
http://localhost:8081/index/index
```










