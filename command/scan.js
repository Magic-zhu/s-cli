const child = require('child_process');
const fs = require('fs');
const path = require('path');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
const message = require('../utils/message');
const PSD = require('psd');
module.exports=function(filePath){
    if(!filePath){
        message.error('缺少参数:psd文件路径')
        return 
    }
    message.info('psd文件解析中...')
    const psd = PSD.fromFile(filePath);
    psd.parse();
    let arr = psd.tree().export();
    Writer('/Users/alex/Downloads/19306/test.json',JSON.stringify(arr))
    .subscribe(()=>{
        message.success('导出成功')
    })
}