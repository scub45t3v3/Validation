(function() {
  var REGEX, debug, isISSN;

  debug = require('debug')('@scuba-squad:validation:isISSN');

  REGEX = /^\d{4}-?\d{3}[\dX]$/i;

  isISSN = function(value) {
    var i, idx, len, sum, val;
    debug('call:isISSN(%o)', value);
    if (!REGEX.test(value)) {
      return false;
    }
    value = value.replace(/[^\dX]/gi, '').split('');
    sum = 0;
    if (/^x$/i.test(value[7])) {
      value[7] = 10;
    }
    for (idx = i = 0, len = value.length; i < len; idx = ++i) {
      val = value[idx];
      val = parseInt(val);
      sum += (8 - idx) * val;
    }
    return !(sum % 11);
  };

  module.exports = isISSN;

}).call(this);
