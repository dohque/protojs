var express = require('express');

var application = function Application() {
  var app = express();
  
  process.env.PWD = process.cwd();
  app.use(express.static(process.env.PWD + '/static'));

  app.set('views', process.env.PWD + '/views')
  app.set('view engine', 'jade')

  app.use(express.logger('dev'));

  app.get('/hello.txt', function(req, res){
    res.send('Hello World');
  });

  app.get('/', function (req, res) {
    res.render('comingsoon');
  });
/*
  app.get('/', function (req, res) {
    res.render('index', { title: "Home" });
  });
*/
  app.listen(3000);
  console.log('Listening on port 3000');
}

exports.Application = application;
