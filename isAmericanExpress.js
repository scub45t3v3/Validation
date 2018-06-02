(function() {
  var REGEX, debug, isAmericanExpress, isLuhn;

  debug = require('debug')('@scuba-squad:validation:isAmericanExpress');

  isLuhn = require('./isLuhn');

  REGEX = /^3[47][0-9]{13}$/;

  isAmericanExpress = function(value) {
    debug('call:isAmericanExpress(%o)', value);
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isAmericanExpress;

}).call(this);
