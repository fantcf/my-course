#### 阶段介绍

1. 什么是node？

   node.js是一款基于chrome v8引擎的JavaScript运行时；即node.js是一款可以运行js的环境；



2. 有哪些模块化方式？

   commonJs：module.exports提供对外接口；require接收文件；

   ```js
   // a.js 向外暴露文件
   const test1 = 'a'
   const test2 = 'b'
   function fn1() { console.log('fn1') }
   module.exports.test1 = test1
   module.exports.test2 = test2
   module.exports.fn1 = fn1
   
   // b.js
   global.test3 = 'c'
   
   // c.js接收文件
   const mod = require('./a.js')
   console.log(mod.test1) // a
   console.log(mod.test2) // b
   mod.fn1() // fn1
   console.log(test3) // c
   ```

3. 淘宝镜像地址

   ```js
   // 安装
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   // 使用
   cnpm i xxx
   // 下载方式
   cnpm i xxx -g // 全局下载
   cnpm i xxx -s // 局部下载：生产环境（上线后不删除）
   cnpm i xxx -d // 局部下载：开发环境（上线后会删除）
   ```

4. 上传自己的包

   ```js
   // 1. npm官网注册账号 =》 登录 =》 https://www.npmjs.com/
   // 2. 初始化项目：npm init || cnpm init
   // 3. npm登录：npm login =》 输入邮箱密码
   // 4. 上传npm包：npm publish
   ```

5. package.json文件

   ```json
   {
       "name": "07",
       "version": "1.0.0",
       "description": "",
       "main": "index.js",
       // 调试
       "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1"
       },
       "author": "",
       "license": "ISC",
       "dependencies": {
           "express": "^4.17.1",
           "mysql": "^2.18.1"
       }
   }
   ```



























































































































































