(function() {
  var debug, isFunction;

  debug = require('debug')('@scuba-squad:validation:isFunction');

  isFunction = function(value) {
    debug('call:isFunction(%o)', value);
    return typeof value === 'function';
  };

  module.exports = isFunction;

}).call(this);
