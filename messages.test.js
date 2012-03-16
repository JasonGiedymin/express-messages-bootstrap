
/**
 * Module dependencies.
 */

var express = require('express')
  , messages = require('../')
  , assert = require('assert');

module.exports = {
  'test messages dynamic helper': function(){
    var app = express.createServer(
      express.cookieParser(),
      express.session({ secret: 'wahoo' })
    );
    app.set('views', __dirname + '/fixtures');
    app.dynamicHelpers({ messages: messages });
    
    app.get('/', function(req, res, next){
      req.flash('error', 'This is an error.');
      req.flash('info', 'This is an info.');
      req.flash('warning', 'This is a warning.');
      req.flash('success', 'This is success.');

      res.render('messages.ejs', {
        layout: false
      });
    });
    
    app.get('/none', function(req, res, next){
      res.render('messages.ejs', {
        layout: false
      });
    });

    var html = [
    '<div id="messages">'
    ,'<div class="alert alert-error">'
    ,'<a class="close" data-dismiss="alert">&times;</a>'
    ,'This is an error.'
    ,'</div>'
    ,'<div class="alert alert-info">'
    ,'<a class="close" data-dismiss="alert">&times;</a>'
    ,'This is an info.'
    ,'</div>'
    ,'<div class="alert alert-warning">'
    ,'<a class="close" data-dismiss="alert">&times;</a>'
    ,'This is a warning.'
    ,'</div>'
    ,'<div class="alert alert-success">'
    ,'<a class="close" data-dismiss="alert">&times;</a>'
    ,'This is success.'
    ,'</div>'
    ,'</div>'
    ].join('\n');

    assert.response(app,
      { url: '/' },
      { body: html });
    assert.response(app,
      { url: '/none' },
      { body: '' });
  }
};