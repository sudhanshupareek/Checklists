/**
 * Module dependencies
 */
var url = require("url")
  , resolve = require("path").resolve
  , join = require("path").join
  , debug = require("debug")("connect-base");

module.exports = function(options) {
  options = options || {};
  
  // Header names
  var hostHeader = options.host || 'x-forwarded-host'
    , pathHeader = options.path || 'x-forwarded-path'
    , portHeader = options.port || 'x-forwarded-port'
    , protoHeader = options.proto || 'x-forwarded-proto';
  
  return function base(req, res, next) {
    var hostParts = req.headers.host.split(":");

    // Construct the base
    var base = {
      protocol: (req.headers[protoHeader] || req.protocol || "http").split(",")[0],
      hostname: (req.headers[hostHeader] || hostParts[0] || "").split(",")[0],
      port: (req.headers[portHeader] || hostParts[1] || "").split(",")[0],
      pathname: (req.headers[pathHeader] || "").split(",")[0]
    };

    // Remove standard ports
    if((base.port == 80 && base.protocol === "http") ||
       (base.port == 443 && base.protocol === "https")) delete base.port;

    debug("", base);

    // Expose req.base
    req.base = url.format(base);

    // Expose req.resolve
    req.resolve = function() {
      var path = Array.prototype.join.call(arguments, "/");

      // It's an absolue path
      if(url.parse(path).protocol) return path;

      // Resolve it relative to the mounted app
      var urlLength = req.url.length === 1 ? req.originalUrl.length : -req.url.length+1
        , appPath = !!req.originalUrl && req.url !== req.originalUrl ? req.originalUrl.slice(0,urlLength) : "/";

      // Join the base path with the app path
      var joinedPath = join(base.pathname || "/", appPath);

      // It's a relative path
      var resolvedPath = url.format({
        protocol: base.protocol,
        hostname: base.hostname,
        port: base.port,
        pathname: resolve(joinedPath, path)
      });

      debug("Resolving path",joinedPath,"+",path,"->",resolvedPath);

      return resolvedPath;
    };
    next();
  }
};
