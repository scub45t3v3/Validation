(function() {
  var debug, isAll, isMD5;

  debug = require('debug')('@scuba-squad:validation:isMD5');

  isAll = require('./isAll');

  isMD5 = function(value) {
    debug('call:isMD5(%o)', value);
    return isAll(value, 'isHexadecimal', ['isLength', 32]);
  };

  module.exports = isMD5;

}).call(this);
