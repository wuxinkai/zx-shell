#!/usr/bin/env zx

//定义变量
const UI_PATH = "./vue-demo"; //被拷贝的地址

// const INSTALL_PATH = `../deployment`; //要存储的地址
const INSTALL_PATH = `D:/1knowledge/vue3`; //要存储的地址

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