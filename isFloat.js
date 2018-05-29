(function() {
  var BigNumber, isFloat;

  BigNumber = require('bignumber.js');

  isFloat = function(value, opt = {}) {
    value = new BigNumber(value);
    if (!(value != null ? typeof value.isFinite === "function" ? value.isFinite() : void 0 : void 0)) {
      return false;
    }
    if (((opt != null ? opt.min : void 0) != null) && !isFloat(opt.min)) {
      throw new TypeError('opt.min must be a valid number');
    }
    if (((opt != null ? opt.max : void 0) != null) && !isFloat(opt.max)) {
      throw new TypeError('opt.min must be a valid number');
    }
    if (((opt != null ? opt.step : void 0) != null) && !isFloat(opt.step)) {
      throw new TypeError('opt.step must be a valid number');
    }
    if (!!opt.safe) {
      opt.min || (opt.min = Number.MIN_VALUE);
      opt.max || (opt.max = Number.MAX_VALUE);
    }
    if ((opt.min != null) && value.lt(opt.min)) {
      return false;
    } else if ((opt.max != null) && value.gt(opt.max)) {
      return false;
    } else if ((opt.step != null) && !value.mod(opt.step).eq(0)) {
      return false;
    }
    return true;
  };

  module.exports = isFloat;

}).call(this);
