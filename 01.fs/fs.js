// 文件系统模块
const fs = require('fs')

/**
 *

 function () {

 }

 () => {

 }

 *
 */

// 读取指定文件
fs.readFile('../file/hi.txt', 'utf8', (err, data) => {
    // err === null
    if (err) {
        return console.error('读取不到文件', err)
    }

    console.log('#####');

    console.log(data);
})


