(function() {
  var REGEX, isAmericanExpress, isLuhn;

  isLuhn = require('./isLuhn');

  REGEX = /^3[47][0-9]{13}$/;

  isAmericanExpress = function(value) {
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isAmericanExpress;

}).call(this);
