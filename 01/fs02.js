
const fs = require('fs');


// fs 写入文件
fs.writeFile('../file/write.txt', 'abcd', 'utf8', (err) => {
    if (err) {
        console.error('写入错误', err);
    }
})







