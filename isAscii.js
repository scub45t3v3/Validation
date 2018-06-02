(function() {
  var REGEX, debug, isAscii;

  debug = require('debug')('@scuba-squad:validation:isAscii');

  REGEX = /^[\x00-\x7F]+$/;

  isAscii = function(value) {
    debug('call:isAscii(%o)', value);
    return (value != null) && REGEX.test(value);
  };

  module.exports = isAscii;

}).call(this);
