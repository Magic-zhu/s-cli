const express = require('express');
const router = express.Router();

const file = require("../functions/file")
const os = require('os');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/getFileTree",function(req, res, next){
  let {body} = req;
  let tree = file.readDir(body.path)
  res.json(tree)
})

router.get('/platform',function(req,res,next){
  res.json(os.platform())
})
// router.get('/platform',function(req,res,next){

// })
// router.get('/platform',function(req,res,next){

// })
// router.get('/platform',function(req,res,next){

// })
// router.get('/platform',function(req,res,next){

// })
module.exports = router;
