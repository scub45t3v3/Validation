(function() {
  var debug, isWeakMap;

  debug = require('debug')('@scuba-squad:validation:isWeakMap');

  isWeakMap = function(value) {
    debug('call:isWeakMap(%o)', value);
    return value instanceof WeakMap;
  };

  module.exports = isWeakMap;

}).call(this);
