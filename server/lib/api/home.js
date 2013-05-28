
/**
 * Module dependencies.
 */


/**
 * Expose the app
 */
exports.index = function(req, res, next) {
  var home = {
    me: { href: "/me" }
  };

  res.json(home);
}