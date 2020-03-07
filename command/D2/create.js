const templates = require('../../config/template.json');
const loadTemplate = require('../../utils/loadTemplate');
module.exports = function(name,complex){
    let templatePath ='';
    templatePath = !complex?templates[3].git:templates[5].git;
    loadTemplate(templatePath,name);
}