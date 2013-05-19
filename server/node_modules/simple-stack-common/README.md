simple-stack-common [![Build Status](https://travis-ci.org/flokk/simple-stack-common.png?branch=master)](https://travis-ci.org/flokk/simple-stack-common)
===================

Common stack for 'simple' applications

Middleware
----------

### Pre-router stack

* [logger](http://www.senchalabs.org/connect/logger.html) (development mode only)
* [empty-favicon](https://github.com/CamShaft/empty-favicon)
* [connect-base](https://github.com/CamShaft/connect-base)
* [connect-metric](https://github.com/CamShaft/connect-metric)
* [methodOverride](http://www.senchalabs.org/connect/methodOverride.html)
* [bodyParser](http://www.senchalabs.org/connect/bodyParser.html)
* [header-logger](./lib/header-logger.js)
* [compress](http://www.senchalabs.org/connect/compress.html)

### Post-router stack

* [error-logger](./lib/header-logger.js)
