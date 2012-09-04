var http = require('http');
var request = require('supertest');
var assert = require('assert');
var should = require('should');
var app = require('./app-lib')('v2');

var expected_body = [
'<!DOCTYPE html>',
'<html>',
'<head><title>Express</title></head>',
'<body><h1>Express</h1>',
'<h3>Rendered</h3>',
'<!-- Rendered Messages `require(\'express-messages-bootstrap\').with({should_render:true})`-->',
'<div>',
  '<div id="messages">',
    '<div class="alert alert-info"><button class="close" data-dismiss="alert">&times;</button>One</div>',
  '</div>',
'</div>',
'</body>',
'</html>'].join('');

var expected_body_test = [
'<!DOCTYPE html>',
'<html>',
'<head><title>Express</title></head>',
'<body><h1>Express</h1>',
'<h3>Rendered</h3>',
'<!-- Rendered Messages `require(\'express-messages-bootstrap\').with({should_render:true})`-->',
'<div>',
  '<div id="messages">',
    '<div class="alert alert-info"><button class="close" data-dismiss="alert">&times;</button>One</div>',
    '<div class="alert alert-mycustom"><button class="close" data-dismiss="alert">&times;</button>Two</div>',
    '<div class="alert alert-success"><button class="close" data-dismiss="alert">&times;</button>Three</div>',
    '<div class="alert alert-error"><button class="close" data-dismiss="alert">&times;</button>Four</div>',  '</div>',
'</div>',
'</body>',
'</html>'].join('');

describe('express-messages-bootstrap v2 mode', function(){
  it('Should handle a message', function(done){
    request(app)
      .get('/')
      .expect(200)
      .expect(expected_body, done)
  })

  it('Should handle multiple messages', function(done){
    request(app)
      .get('/test')
      .expect(200)
      .expect(expected_body_test, done)
  })
})
