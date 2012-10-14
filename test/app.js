var app = require('./app-lib')('v3');
var http = require('http');

http.createServer(app).listen(app.get('port'), function() {
  console.log('App started on ' + app.get('port'));
});
