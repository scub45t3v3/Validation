(function() {
  var debug, isPromise;

  debug = require('debug')('@scuba-squad:validation:isPromise');

  isPromise = function(value) {
    debug('call:isPromise(%o)', value);
    return value instanceof Promise;
  };

  module.exports = isPromise;

}).call(this);
