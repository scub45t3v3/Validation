(function() {
  var REGEX, debug, isBase64, isRegExp;

  debug = require('debug')('@scuba-squad:validation:isBase64');

  isRegExp = require('./isRegExp');

  REGEX = /^[a-z\d+\/]+={0,2}$/i;

  isBase64 = function(value) {
    debug('call:isBase64(%o)', value);
    return (value != null) && !isRegExp(value) && REGEX.test(value) && !((value != null ? value.length : void 0) % 4);
  };

  module.exports = isBase64;

}).call(this);
