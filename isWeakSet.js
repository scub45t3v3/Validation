(function() {
  var debug, isWeakSet;

  debug = require('debug')('@scuba-squad:validation:isWeakSet');

  isWeakSet = function(value) {
    debug('call:isWeakSet(%o)', value);
    return value instanceof WeakSet;
  };

  module.exports = isWeakSet;

}).call(this);
