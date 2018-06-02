(function() {
  var REGEX, debug, isAlpha;

  debug = require('debug')('@scuba-squad:validation:isAlpha');

  REGEX = /^[a-z]+$/i;

  isAlpha = function(value) {
    debug('call:isAlpha(%o)', value);
    return (value != null) && REGEX.test(value);
  };

  module.exports = isAlpha;

}).call(this);
