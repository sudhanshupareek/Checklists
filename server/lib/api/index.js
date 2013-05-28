
/**
 * Module dependencies.
 */
var db = require('model')
  , express = require('express')
  , home = require('./home')
  , me = require('./me')
  , checklist = require('./checklist');


/**
 * Expose the app
 */
var app = exports = module.exports = express();

app.use(function(req, res, next) {
  console.log('Headers', req.headers);
  next();
});

app.get('/', home.index);
app.get('/me', me.index);
app.get('/me/checklists', me.checklists);
app.post('/me/checklists', me.create);
app.get('/checklists/create', me.create_form);
app.get('/checklist/:id', checklist.load);

app.get('/text', function(req, res, next) {
  res.send('<a href="/">hello</a>');
});
