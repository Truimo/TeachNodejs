
const fs = require('fs');

// 数组 []

// ['1' , '2', '3']
// 0   1    2
// node + js 路径


// 读取
fs.readFile('../file/01.txt', 'utf8', (err, data) => {

    // 判断是否读到
    if (err) {
        return console.error('读取不到文件', err)
    }

    const arr = data.split(' ');
    // [ '苹果=2', '西瓜=10', '香蕉=5' ]
    // 苹果=2 xxxx=nnn  =

    const a = {}

    // arr.forEach((it) => {
    //     console.log(it);
    // })

    for (let i = 0; i < arr.length; i++) {
        const it = arr[i];
        const b  = it.split('=');

        a[b[0]] = b[1]
    }

    // JSON.stringify  object -> string
    // JSON.parse   string -> object
    const s = JSON.stringify(a);

    fs.writeFile('../file/02.txt', s, 'utf8', (err, data) => {
        if (err) {
            console.error('写入错误', err);
        }
    })
})



