# 全局安装 zx

```
npm i -g zx
```

# 起步

为了更好使用，我们需要将我们的.s 后缀改写为.mjs,同时在 package.json 中添加

```
"type": "module"
```

然后我们需要在我们的脚本文件开头（顶部）添加特殊注释标记为 zx 脚本

```
#！/usr/bin/env zx
```

# 运行

两种方式

```
//添加权限
chmod +x ./script.mjs
//执行文件
./script.mjs

zx ./script.mjs

```

# 创建文件夹

```
 let name = 'text_dir'
 await $`mkdir ${name}`
```

查看当前文件

```
parseInt(await $ `ls -1`)
```

切换文件夹

```
 const dir_name = "text_dir";
 //判断是否存在
 let has_file = fs.existsSync(path.join(__dirname, `./${dir_name}`))
 if (!has_file) await $`mkdir ${dir_name}`
 //进入文件夹
 cd(`./${dir_name}`);
 //在文件夹下创建文件夹
 await $`mkdir text01`

```

查看当前文件个数

```
let count = parseInt(await $ `ls -1 | wc -l`)
console.log(`Files count: ${count}`)
```

可以传递参数数组

```
let  flags  =  [
  '--oneline' ,
  '--decorate' ,
  '--color' ,
]
await  $ `git log ${ flags } `

```

请求接口

```
let resp = await fetch('https://www.baidu.com/')
if (resp.ok) {
  console.log(await resp.text())
}
```

question 按步骤执行代码

```
//按步骤执行
let q1 = await question('请回答我的问题?')
console.log(q1)
let q2 = await question('是否下一步?', {
  choices: Object.keys(process.env)
})
console.log(q2)

```

延时执行代码 ，三秒钟后执行

```
await sleep(3000)
```

读取引用文件

```
let content = fs.readFileSync('./package.json')
//2进制转十进制
let dependencies = JSON.parse(content.toString())
console.log(dependencies)
```

js 循环操作

```
let dirName = 'temp'
//判断是否存在
let hasFile = fs.existsSync(path.join(__dirname, `./${dirName}`))
if (!hasFile) await $`mkdir ${dirName}`

//读取package
let content = fs.readFileSync('./package.json')
let dependencies = JSON.parse(content.toString())

console.log(dependencies)
Object.keys(dependencies).forEach(async (key, index) => {
	let regex = new RegExp('[\\\\/:*?"<>|]')
	// 判断文件夹是否存在了
	let ifFileExist = fs.existsSync(path.join(__dirname, `./${dirName}/${key}`))
	if (!regex.test(key) && !ifFileExist) {
		await $`mkdir ${key}`
	}
})

//进入文件 执行顺序不能返 ，
cd(`${dirName}`)

```

备注

```
"echo '备注'"
```
