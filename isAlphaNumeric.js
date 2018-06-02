(function() {
  var REGEX, debug, isAlphaNumeric;

  debug = require('debug')('@scuba-squad:validation:isAlphaNumeric');

  REGEX = /^[a-z\d]+$/i;

  isAlphaNumeric = function(value) {
    debug('call:isAlphaNumeric(%o)', value);
    return (value != null) && REGEX.test(value);
  };

  module.exports = isAlphaNumeric;

}).call(this);
