const express = require('express');
const router = express.Router();

const file = require("../functions/file")

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/getFileTree",function(req, res, next){
  let {body} = req;
  let tree = file.readDir(body.path)
  res.json(tree)
})

module.exports = router;
