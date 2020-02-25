const path = require('path');
const fs = require('fs');
const message = require('../../utils/message');
const Rx = require('rxjs/Rx');
const Writer = Rx.Observable.bindNodeCallback(fs.writeFile);
const Reader = Rx.Observable.bindNodeCallback(fs.readFile);

module.exports = function (name, e) {

    let generate_path = e.path ? e.path : './'
    generate_path = path.resolve(generate_path)

    if (e.component) {
        console.log(path)
    }

    if (e.page) {
        message.info("读取app.json文件");
        Reader(path.resolve("./app.json"))
            .toPromise()
            .then(buffer => {
                let config = JSON.parse(buffer.toString())
                config.pages.push(`pages/${name}/index`)
                return Writer(path.resolve("./app.json"), JSON.stringify(config)).toPromise()
            })
            .then(res => {
                message.success('路由添加成功')
            })
            .catch(err => {
                message.error(err)
            })
    }

}