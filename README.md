# 全局安装 zx

要求

```
安装 node Node.js >= 14.13.1
```

下载

```
npm i -g zx
```

# 起步

为了更好使用，我们需要将我们的.s 后缀改写为.mjs,同时在 package.json 中添加

```
"type": "module"
```

添加特殊注释标记为 zx 脚本 ,声明脚本运行环境 脚本用 env 启动的原因，是因为脚本解释器在 linux 中可能被安装于不同的目录，env 可以在系统的 PATH 目录中查找。同时，env 还规定一些系统环境变量。

```
#！/usr/bin/env zx
```

# 运行

两种方式运行脚本

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

读取本地文件文件，

```
let content = fs.readFileSync('./package.json')
//2进制转十进制
let dependencies = JSON.parse(content.toString())
console.log(dependencies)
```

请求远端接口

```
let resp = await fetch('https://www.baidu.com/')
if (resp.ok) {
  console.log(await resp.text())
}
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

# 通过脚本创建项目

```
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
```

# 接口请求例子

```

```

# pipe 管道用法

# 自定打包，自定转移项目

```
#!/usr/bin/env zx

//定义变量
const UI_PATH = "./vue-demo"; //被拷贝的地址

// const INSTALL_PATH = `../deployment`; //要存储的地址
const INSTALL_PATH = `D:/1knowledge/vue3`; //vue项目

//自执行函数
void async function () {
  try {
    //读取本地文件
    let configData = await fs.readFile('./installConfig.json');
    //转成字符串
    let config = JSON.parse(configData.toString());
    //判断json里的属性
    if (config.UI.isUpdate) {
      // 拷贝文件
      buildUI(INSTALL_PATH);
    }
  } catch (p) {
    console.log(`Exit code: `);
  }
}();

async function buildUI(INSTALL_PATH) {
  try {
    cd(UI_PATH);
    await $ `cnpm i` // $ `command` 执行的命令是异步命令 要注意大部分时间其实我们是需要将其转为同步的
    await $ `cnpm run build`;

    // await $ `mv ./dist/* ${INSTALL_PATH}`; //讲dist理的所有内容转移

    await $ `mv ./dist ${INSTALL_PATH}`; //数据转移

    //将文件移动到哪个文件下
    // $ `mv dist/ ${INSTALL_PATH}`;


		//进入拷贝的盘浮
    cd(INSTALL_PATH);
    
		//启动本地服务
    await $ `http-server`;

  } catch (p) {
    console.log(`Exit code: ${p.exitCode}`);
  }


}
```
