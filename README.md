# praise-by-koa
### 功能介绍
- 用PHP+MySQL完成点赞接口，实现用户点击一次更新数据库点赞总数+1
- 用koa2+ES6封装PHP点赞接口，并建立路由。
- 将[praise](https://github.com/pengxiaohua/praise)项目迁移进入koa2，通过index/index路由进行访问
- 将用户点击事件通过axios链接到koa2点赞接口
- 对用户点击事件进行稀释，提取点赞和稀释函数为函数式编程
- 测试：完成点赞接口的自动化测试、点赞+1功能的自动化测试、真是页面的点击自动化测试
