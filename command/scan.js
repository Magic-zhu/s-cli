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
    PSD.open(filePath).then(psd=>{
        for (let i = 0; i < psd.layers.length; i++) {
            psd.layers[i].image.saveAsPng('/Volumes/code/' + 'output'+i + '.png')
        }
    })
}