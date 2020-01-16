const path = require('path');
const fs = require('fs');
const message = require("../../utils/message");
const beautify = require('beautify');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);
module.exports = function () {
    message.info('读取中...')
    Reader(path.resolve('./app.json'), 'utf8')
        .toPromise()
        .then(buffer => {
            let res = JSON.parse(buffer.toString());
            res.disableSroll = false;
            let string = beautify(JSON.stringify(res), {format: 'json'});
            return Writer(path.resolve('./app.json'), string, 'utf8').toPromise()
        })
        .then(buffer => {
            message.success('配置成功')
        }, (err) => {
            message.error(err)
        })
}