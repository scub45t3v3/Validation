(function() {
  var debug, isInteger, isLength;

  debug = require('debug')('@scuba-squad:validation:isLength');

  isInteger = require('./isInteger');

  isLength = function(value, opt = {}) {
    var length;
    debug('call:isLength(%o, %o)', value, opt);
    length = (value != null ? value.length : void 0) || (value != null ? value.size : void 0);
    if (isInteger(opt)) {
      opt = {
        min: opt,
        max: opt
      };
    }
    opt.min || (opt.min = 1);
    opt.safe = true;
    return isInteger(length, opt);
  };

  module.exports = isLength;

}).call(this);
