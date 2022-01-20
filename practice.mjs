#!/usr/bin/env zx


//1 获取我的repo列表  

let data = await fetch('https://api.github.com/users/wuxinkai/repos')
let urls = await data.json()
//过滤掉从网上拷贝的项目

//拿到数组对象中的某一项, 组成数组
const repos = urls.filter((info) => {
  return !info.fork
}).map(info => info.git_url)

//创建前先删除，
await $`rm -rf backups`

//创建文件夹
await $ `mkdir backups`
cd("./backups")

//2 拉去下 git clone  
Promise.all(
  repos.map(url => {
    return $ `git clone ${url}`
  })
)