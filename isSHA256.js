(function() {
  var debug, isAll, isSHA256;

  debug = require('debug')('@scuba-squad:validation:isSHA256');

  isAll = require('./isAll');

  isSHA256 = function(value) {
    debug('call:isSHA256(%o)', value);
    return isAll(value, 'isHexadecimal', ['isLength', 64]);
  };

  module.exports = isSHA256;

}).call(this);
