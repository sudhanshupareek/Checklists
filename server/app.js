/**
 * Module dependencies.
 */
var stack = require('simple-stack-common');

/**
 * Expose the app
 */
var app = module.exports = stack();

app.get('*', function(req, res) {
  res.json({});
});

app.post('*', function(req, res) {
  res.status(201);
  res.send('');
});

app.configure('test', function() {
  app.remove('errorLogger');
});

app.configure(function() {
  app.enable('trust proxy');
});
