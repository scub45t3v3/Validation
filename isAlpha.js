(function() {
  var REGEX, isAlpha;

  REGEX = /^[a-z]+$/i;

  isAlpha = function(value) {
    return (value != null) && REGEX.test(value);
  };

  module.exports = isAlpha;

}).call(this);
