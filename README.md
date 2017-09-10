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
├── app.js                         <-- koa和ES6封装php接口，给出路由
├── package-lock.json
├── package.json
├── public
│   └── index
│       ├── css
│       │   └── main.css           <-- CSS文件
│       ├── dist
│       │   ├── index-es5.js       <-- ES5 点赞+1
│       │   └── thumb-es5.js       <-- ES5 实例化index.js
│       └── js
│           ├── connect-api.js     <-- axios调用点赞接口文件
│           ├── index.js           <-- ES6 点赞+1
│           └── thumb.js           <-- ES6 实例化index.js
├── server
│   ├── db.php                     <-- 连接数据库
│   ├── get_count.php              <-- 请求当前点赞次数接口
│   └── post_count.php             <-- 点赞接口
├── tree.txt
└── views
    └── index.html                 <-- 主页面
```
    
## 下载
#### 下载当前项目
```shell
git clone https://github.com/pengxiaohua/praise
cd praise 
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
```('localhost','root','','praise',3506)```
##### 数据库名praise，接口3506，表名praise_count，2个字段‘id’和‘count’，id默认值为1，count默认值为0。

##### 浏览器输入 ````http://localhost:8081/index/index````










