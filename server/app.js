/**
 * Module dependencies.
 */
var stack = require('simple-stack-common')
  , api = require('api');

/**
 * Expose the app
 */
var app = module.exports = stack();
app.useBefore('router', '', 'subapp: api', api);

app.configure('test', function() {
  app.remove('errorLogger');
});

app.configure(function() {
  app.enable('trust proxy');
});
