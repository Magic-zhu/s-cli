const wxmlParse = function (wxml) {
    let stack = [];
    wxml = wxml.replace(/[\t\n]/g,"");
    const startTagOpen = /^<[a-zA-Z_-]+/;
    let res = wxml.match(startTagOpen);
    stack.push(res[0]);
    wxml = wxml.slice(res.index+res[0].length)
    console.log(wxml,stack)
};
module.exports = wxmlParse;