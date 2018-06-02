(function() {
  var REGEX_10, REGEX_13, debug, isISBN, isISBN10, isISBN13;

  debug = require('debug')('@scuba-squad:validation:isISBN');

  REGEX_10 = /^\d{9}[\dX]$/;

  REGEX_13 = /^\d{13}$/;

  isISBN = function(value, version) {
    var ref, sanitized;
    debug('call:isISBN(%o, %o)', value, version);
    sanitized = value != null ? typeof value.toString === "function" ? (ref = value.toString()) != null ? typeof ref.toUpperCase === "function" ? ref.toUpperCase().replace(/[\s-]+/g, '') : void 0 : void 0 : void 0 : void 0;
    version || (version = sanitized != null ? sanitized.length : void 0);
    switch (version) {
      case 10:
      case '10':
        return isISBN10(sanitized);
      case 13:
      case '13':
        return isISBN13(sanitized);
      default:
        return false;
    }
  };

  isISBN10 = function(value) {
    var i, idx, len, sum, val;
    debug('call:isISBN10(%o)', value);
    if (!REGEX_10.test(value)) {
      return false;
    }
    sum = 0;
    value = value.split('').reverse();
    if (value[0] === 'X') {
      value[0] = 10;
    }
    for (idx = i = 0, len = value.length; i < len; idx = ++i) {
      val = value[idx];
      sum += (idx + 1) * parseInt(val);
    }
    return !(sum % 11);
  };

  isISBN13 = function(value) {
    var i, idx, len, ref, sum, val;
    debug('call:isISBN13(%o)', value);
    if (!REGEX_13.test(value)) {
      return false;
    }
    sum = 0;
    ref = value.split('');
    for (idx = i = 0, len = ref.length; i < len; idx = ++i) {
      val = ref[idx];
      val = parseInt(val);
      if (idx % 2) {
        val *= 3;
      }
      sum += val;
    }
    return !(sum % 10);
  };

  module.exports = isISBN;

}).call(this);
