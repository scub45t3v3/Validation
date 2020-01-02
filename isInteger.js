'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isInteger');
const BigNumber = require('bignumber.js');
const isFloat = require('./isFloat');

const isInteger = (value, opt = {}) => {
  debug('call:isInteger(%o, %o)', value, opt);

  value = new BigNumber(value);

  if (!value.isFinite()) {
    return false;
  }

  if (opt && opt.min != null && !isFloat(opt.min)) {
    throw new TypeError('opt.min must be a valid number');
  }

  if (opt && opt.max != null && !isFloat(opt.max)) {
    throw new TypeError('opt.min must be a valid number');
  }

  if (opt && opt.step != null && !isFloat(opt.step)) {
    throw new TypeError('opt.step must be a valid number');
  }

  if (opt.safe) {
    opt.min || (opt.min = Number.MIN_SAFE_INTEGER);
    opt.max || (opt.max = Number.MAX_SAFE_INTEGER);
  }

  if (opt.min != null && value.lt(opt.min)) {
    return false;
  } else if (opt.max != null && value.gt(opt.max)) {
    return false;
  } else if (opt.step != null && !value.mod(opt.step).eq(0)) {
    return false;
  }

  return value.isInteger();
};

// export as commonjs module
module.exports = isInteger;