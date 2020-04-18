const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

/* Seteo directorio público */
app.use('/public', express.static('src/assets'));

/* Ruta de la home */
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

/* Ruta página Vue */
router.get('/vue',function(req,res){
  res.sendFile(path.join(__dirname+'/src/vue.html'));
});

/* Ruta página AngularJS */
router.get('/angularjs',function(req,res){
  res.sendFile(path.join(__dirname+'/src/angularjs.html'));
});

/* Ruta página jQuery */
router.get('/jquery',function(req,res){
  res.sendFile(path.join(__dirname+'/src/jquery.html'));
});

/* Ruta página React (poco optimizado) */
router.get('/react',function(req,res){
  res.sendFile(path.join(__dirname+'/src/react.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 8080);