var application = function Application() {

  process.env.PWD = process.cwd()

  var express = require('express');
  var app = express();

  app.use(express.static(process.env.PWD + '/static'));
  app.use(express.logger('dev'));

  app.set('views', process.env.PWD + '/views')
  app.set('view engine', 'jade')

  app.get('/hello.txt', function(req, res){
    res.send('Hello World');
  });

  app.get('/', function (req, res) {
    res.render('index', { title : 'Home' })
  });

  app.listen(3000);
  console.log('Listening on port 3000');
}

exports.Application = application;
