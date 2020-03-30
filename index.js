const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/public', express.static('src/assets'));

//Home
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

//Pages frameworks
router.get('/vue',function(req,res){
  res.sendFile(path.join(__dirname+'/src/vue.html'));
});

router.get('/angularjs',function(req,res){
  res.sendFile(path.join(__dirname+'/src/angularjs.html'));
});

router.get('/jquery',function(req,res){
  res.sendFile(path.join(__dirname+'/src/jquery.html'));
});

router.get('/react',function(req,res){
  res.sendFile(path.join(__dirname+'/src/react.html'));
});

//Route and port
app.use('/', router);
app.listen(process.env.PORT || 8080);