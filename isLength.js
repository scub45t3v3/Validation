(function() {
  var isInteger, isLength;

  isInteger = require('./isInteger');

  isLength = function(value, opt = {}) {
    var length;
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
