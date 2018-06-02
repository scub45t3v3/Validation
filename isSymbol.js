(function() {
  var REGEX, debug, isSymbol;

  debug = require('debug')('@scuba-squad:validation:isSymbol');

  REGEX = /^Symbol\(.*\)$/;

  isSymbol = function(value) {
    debug('call:isSymbol(%o)', value);
    return typeof value === 'symbol' || REGEX.test(value);
  };

  module.exports = isSymbol;

}).call(this);
