(function() {
  var debug, isString;

  debug = require('debug')('@scuba-squad:validation:isString');

  isString = function(value) {
    debug('call:isString(%o)', value);
    return value instanceof String || typeof value === 'string';
  };

  module.exports = isString;

}).call(this);
