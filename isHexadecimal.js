(function() {
  var REGEX, isHexadecimal;

  REGEX = /^[a-f\d]+$/i;

  isHexadecimal = function(value) {
    return REGEX.test(value);
  };

  module.exports = isHexadecimal;

}).call(this);
