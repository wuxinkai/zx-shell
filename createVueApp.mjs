#!/usr/bin/env zx
 //定义变量
let dirName = 'vue-demo'
//创建项目， 必须全局安装才可以
await $ `vue create ${dirName}`
//近如文件夹
await cd(`${dirName}`)
// 删除node_modules
await $ `rm -rf node_modules`
//从新下载依赖
await $ `cnpm i`

await $ `npm run serve`