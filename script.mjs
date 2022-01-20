#!/usr/bin/env zx

//查看当前目录下的文件
// let count = parseInt(await $ `ls -1 | wc -l`)
// console.log(`Files count: ${count}`)

//创建文件夹
// let name = 'text_dir'
// await $`mkdir ${name}`


// let  flags  =  [ 
//   '--oneline' , 
//   '--decorate' , 
//   '--color' , 
// ] 
// await  $ `git log ${ flags } `


//请求接口
// let resp = await fetch('https://www.baidu.com/')
// if (resp.ok) {
//   console.log(await resp.text())
// }

//按步骤执行
// let q1 = await question('请回答我的问题?')
// console.log(q1)
// let q2 = await question('是否下一步?', {
//   choices: Object.keys(process.env)
// })
// console.log(q2)


// await sleep(3000)

//切换文件夹
// const dir_name = "text_dir";
// let has_file = fs.existsSync(path.join(__dirname, `./${dir_name}`))
// if (!has_file) await $`mkdir ${dir_name}`
// cd(`./${dir_name}`);
// await $`mkdir text01`


// let dirName = 'temp'
// //判断是否存在
// let hasFile = fs.existsSync(path.join(__dirname, `./${dirName}`))
// if (!hasFile) await $`mkdir ${dirName}`

// //读取package
// let content = fs.readFileSync('./package.json')
// let dependencies = JSON.parse(content.toString())

// console.log(dependencies)
// Object.keys(dependencies).forEach(async (key, index) => {
// 	let regex = new RegExp('[\\\\/:*?"<>|]')
// 	// 判断文件夹是否存在了
// 	let ifFileExist = fs.existsSync(path.join(__dirname, `./${dirName}/${key}`))
// 	if (!regex.test(key) && !ifFileExist) {
// 		await $`mkdir ${key}`
// 	}
// })

// //进入文件 执行顺序不能返 ，
// cd(`${dirName}`)


// 延时执行，输出信息
// await Promise.all([
//   $`sleep 1; echo 3`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 1`,
// ])


