(function() {
  var REGEX, isLuhn, isVisa;

  isLuhn = require('./isLuhn');

  REGEX = /^4\d{12}(?:\d{3})?$/;

  isVisa = function(value) {
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isVisa;

}).call(this);
