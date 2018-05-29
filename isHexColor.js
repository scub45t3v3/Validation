(function() {
  var REGEX, isHexColor;

  REGEX = /^#?(?:[a-f\d]{3}){1,2}$/i;

  isHexColor = function(value) {
    return REGEX.test(value);
  };

  module.exports = isHexColor;

}).call(this);
