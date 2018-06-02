(function() {
  var debug, isIterable;

  debug = require('debug')('@scuba-squad:validation:isIterable');

  isIterable = function(value) {
    debug('call:isIterable(%o)', value);
    return typeof value[Symbol.iterator] === 'function';
  };

  module.exports = isIterable;

}).call(this);
