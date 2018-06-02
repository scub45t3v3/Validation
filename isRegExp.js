(function() {
  var debug, isRegExp;

  debug = require('debug')('@scuba-squad:validation:isRegExp');

  isRegExp = function(value) {
    debug('call:isRegExp(%o)', value);
    return value instanceof RegExp;
  };

  module.exports = isRegExp;

}).call(this);
