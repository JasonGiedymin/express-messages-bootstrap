(function() {

var express = require('express');
//var messages = require('../').with({should_render:true});
//var messages = require('../');
var messages;

module.exports = function(mode) {
  if (null == mode)
    mode = 'v2'

  if ('v3' == mode)
    messages = require('../');

  if ('v2' == mode)
    messages = require('../').with({should_render:true});

  var app = express();
  app.configure(function() {
    app.set('port', 3900);
    app.set('views', __dirname + '/fixtures');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('express-messages-bootstrap'));
    app.use(express.session());
    app.use(messages);
    app.use(app.router);
  });

  app.get('/', function(req, res) {
    req.info('One')
    res.render('index', {
      title: 'Express'
    });
  });

  app.get('/test', function(req, res) {
    req.info('One')
    req.alert('mycustom', 'Two')
    req.success('Three')
    req.error('Four')

    res.render('index', {
      title: 'Express'
    });
  });

  return app;
}

}).call(this);