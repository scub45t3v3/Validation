'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isFloat');
  const BigNumber = require('bignumber.js');

  const isFloat = (value, opt = {}) => {
    debug('call:isFloat(%o, %o)', value, opt);

    value = new BigNumber(value);

    if (!value.isFinite()) {
      return false;
    }

    if (opt && opt.min != null && !isFloat(opt.min)) {
      debug('error:min %o is not a number', opt.min);

      throw new TypeError('opt.min must be a valid number');
    }

    if (opt && opt.max != null && !isFloat(opt.max)) {
      debug('error:max %o is not a number', opt.max);

      throw new TypeError('opt.min must be a valid number');
    }

    if (opt && opt.step != null && !isFloat(opt.step)) {
      debug('error:step %o is not a number', opt.step);

      throw new TypeError('opt.step must be a valid number');
    }

    if (opt.safe) {
      opt.min || (opt.min = Number.MAX_VALUE * -1);
      opt.max || (opt.max = Number.MAX_VALUE);
    }

    if (opt.min != null && value.lt(opt.min)) {
      return false;
    } else if (opt.max != null && value.gt(opt.max)) {
      return false;
    } else if (opt.step != null && !value.mod(opt.step).eq(0)) {
      return false;
    }

    return true;
  };

  // export as commonjs module
  module.exports = isFloat;
})(); // end IIFE