/**
 * Module dependencies
 */

module.exports = function() {
  return function errorLogger(err, req, res, next) {
    // Default to a 500
    err.code = err.code || 500;

    // If it's a server error, print it
    (err.code > 499 ? console.error : console.warn)(err.stack || err);

    // Tie the error to the request id
    if(req.metric) req.metric("error_response", 1, "response", {code: err.code});

    // Pass it on to the app specific error handler
    next(err);
  }
};
