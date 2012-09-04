var http = require('http');
var request = require('supertest');
var assert = require('assert');
var should = require('should');
var app = require('./app-lib')('v3');

var expected_body = [
'<!DOCTYPE html>',
'<html>',
'<head><title>Express</title></head>',
'<body><h1>Express</h1>',
'<h3>Raw</h3>',
'<!-- Raw Messages `require(\'express-messages-bootstrap\')`-->',
'<ul>',
'<li>info,One</li>',
'</ul>',
'</body>',
'</html>'].join('');

var expected_body_test = [
'<!DOCTYPE html>',
'<html>',
'<head><title>Express</title></head>',
'<body><h1>Express</h1>',
'<h3>Raw</h3>',
'<!-- Raw Messages `require(\'express-messages-bootstrap\')`-->',
'<ul>',
'<li>info,One</li>',
'<li>mycustom,Two</li>',
'<li>success,Three</li>',
'<li>error,Four</li>',
'</ul>',
'</body>',
'</html>'].join('');

describe('express-messages-bootstrap v3 mode', function(){
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
