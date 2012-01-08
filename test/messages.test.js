
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
    ,'<div class="alert-message error" data-alert="alert">'
    ,'<a class="close" href="#">×</a>'
    ,'<p>This is an error.</p>'
    ,'</div>'
    ,'<div class="alert-message info" data-alert="alert">'
    ,'<a class="close" href="#">×</a>'
    ,'<p>This is an info.</p>'
    ,'</div>'
    ,'<div class="alert-message warning" data-alert="alert">'
    ,'<a class="close" href="#">×</a>'
    ,'<p>This is a warning.</p>'
    ,'</div>'
    ,'<div class="alert-message success" data-alert="alert">'
    ,'<a class="close" href="#">×</a>'
    ,'<p>This is success.</p>'
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