(function() {
  var REGEX, debug, isHexadecimal;

  debug = require('debug')('@scuba-squad:validation:isHexadecimal');

  REGEX = /^[a-f\d]+$/i;

  isHexadecimal = function(value) {
    debug('call:isHexadecimal(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isHexadecimal;

}).call(this);
