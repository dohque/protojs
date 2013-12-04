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
  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Listening on port ' + port);
}

exports.Application = application;
