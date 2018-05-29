(function() {
  var REGEX, isAlphaNumeric;

  REGEX = /^[a-z\d]+$/i;

  isAlphaNumeric = function(value) {
    return (value != null) && REGEX.test(value);
  };

  module.exports = isAlphaNumeric;

}).call(this);
