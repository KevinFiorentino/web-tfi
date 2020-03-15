const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/public', express.static('source/assets'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/source/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/vue',function(req,res){
  res.sendFile(path.join(__dirname+'/source/vue.html'));
});

router.get('/angularjs',function(req,res){
  res.sendFile(path.join(__dirname+'/source/angularjs.html'));
});

router.get('/jquery',function(req,res){
  res.sendFile(path.join(__dirname+'/source/jquery.html'));
});

router.get('/react',function(req,res){
  res.sendFile(path.join(__dirname+'/source/react.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.PORT || 5000);