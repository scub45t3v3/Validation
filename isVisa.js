(function() {
  var REGEX, debug, isLuhn, isVisa;

  debug = require('debug')('@scuba-squad:validation:isVisa');

  isLuhn = require('./isLuhn');

  REGEX = /^4\d{12}(?:\d{3})?$/;

  isVisa = function(value) {
    debug('call:isVisa(%o)', value);
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isVisa;

}).call(this);
