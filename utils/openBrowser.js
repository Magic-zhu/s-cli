const exec = require('child_process').exec
const openDefaultBrowser = function (url) {
    console.log(process.platform)
    switch (process.platform) {
      case "darwin":
        exec('open ' + url);
        break;
      case "win32":
        exec('start ' + url);
        break;
      default:
        exec('xdg-open', [url]);
    }
}
module.exports = openDefaultBrowser