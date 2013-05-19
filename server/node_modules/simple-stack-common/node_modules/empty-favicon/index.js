/**
 * Returns an empty favicon
 */
module.exports = function() {
  return function emptyFavicon(req, res, next) {
    res.writeHead(200);
    res.end();
  };
}
