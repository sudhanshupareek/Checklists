/**
 * Module dependencies
 */
var metric = require('metric-log')
  , log = metric.context({fn: "requestLogger"});

log.headers = log.context({at:"headers"}).debug(); 
log.base = log.context({at:"base"}).debug();
log.body = log.context({at:"body"}).debug();
log.env = log.context({at:"env"}).debug();

/**
 * Middleware to log basic parameters about the request.
 */
module.exports = function() {
  return function requestLogger(req, res, next) {
    log.headers(req.headers);
    log.env(process.env);
    log.base({ base: req.base });
    log.body({ body: req.body });
    next();
  };
};
