(function() {
  var isRegExp;

  isRegExp = function(value) {
    return value instanceof RegExp;
  };

  module.exports = isRegExp;

}).call(this);
