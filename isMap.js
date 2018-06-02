(function() {
  var debug, isMap;

  debug = require('debug')('@scuba-squad:validation:isMap');

  isMap = function(value) {
    debug('call:isMap(%o)', value);
    return value instanceof Map;
  };

  module.exports = isMap;

}).call(this);
