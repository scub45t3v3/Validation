(function() {
  var REGEX, isBase64, isRegExp;

  isRegExp = require('./isRegExp');

  REGEX = /^[a-z\d+\/]+={0,2}$/i;

  isBase64 = function(value) {
    return (value != null) && !isRegExp(value) && REGEX.test(value) && !((value != null ? value.length : void 0) % 4);
  };

  module.exports = isBase64;

}).call(this);
