
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

      req.flash('error fade in', 'This is an error.');
      req.flash('info fade in', 'This is an info.');
      req.flash('warning fade in', 'This is a warning.');
      req.flash('success fade in', 'This is success.');

      req.flash('error i-like-big-names-and-i-cannot-lie fight', 'This is an error.');
      req.flash('info i-like-big-names-and-i-cannot-lie for-your-right', 'This is an info.');
      req.flash('warning i-like-big-names-and-i-cannot-lie to', 'This is a warning.');
      req.flash('success i-like-big-names-and-i-cannot-lie paaaaartay', 'This is success.');

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
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an error.'
    ,'</div>'
    ,'<div class="alert alert-info">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an info.'
    ,'</div>'
    ,'<div class="alert alert-warning">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is a warning.'
    ,'</div>'
    ,'<div class="alert alert-success">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is success.'
    ,'</div>'

    ,'<div class="alert alert-error fade in">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an error.'
    ,'</div>'
    ,'<div class="alert alert-info fade in">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an info.'
    ,'</div>'
    ,'<div class="alert alert-warning fade in">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is a warning.'
    ,'</div>'
    ,'<div class="alert alert-success fade in">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is success.'
    ,'</div>'

    ,'<div class="alert alert-error i-like-big-names-and-i-cannot-lie fight">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an error.'
    ,'</div>'
    ,'<div class="alert alert-info i-like-big-names-and-i-cannot-lie for-your-right">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is an info.'
    ,'</div>'
    ,'<div class="alert alert-warning i-like-big-names-and-i-cannot-lie to">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is a warning.'
    ,'</div>'
    ,'<div class="alert alert-success i-like-big-names-and-i-cannot-lie paaaaartay">'
    ,'<button class="close" data-dismiss="alert">&times;</button>'
    ,'This is success.'
    ,'</div>'

    ,'</div>'
    ].join('\n');

    assert.response(app,
      { url: '/' },
      { body: html });
    assert.response(app,
      { url: '/none' },
      { body: '<div id="messages"></div>' });
  }
};