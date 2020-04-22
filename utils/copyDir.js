const Rx = require('rxjs/Rx');
const path = require('path');
const fs = require('fs');
const message = require("./message");
const Copy = Rx.Observable.bindNodeCallback(fs.copyFile);
const DirReader = Rx.Observable.bindNodeCallback(fs.readdir);
function copyDir(src,dest) {
	// body...
	DirReader(src).toPromise().then(res=>{
		let files = res;
		fs.mkdirSync(dest);
		message.success(dest+'目录创建成功');
		files.forEach(item=>{
			message.info('正在生成:'+ dest + item );
			Copy(src+"/"+item,dest+"/"+item).toPromise()
			.then(res=>{
				message.success('生成成功:'+ dest +'/'+ item);
			})
			.catch(err=>{
				console.log(err)
				message.error('生成失败:'+ dest +'/'+ item);
			})
		})

	})
	.catch(err=>{
		message.error(err);
	})
}
module.exports = copyDir;