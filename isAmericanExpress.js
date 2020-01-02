'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAmericanExpress');
const isLuhn = require('./isLuhn');
const REGEX = /^3[47][0-9]{13}$/u;

const isAmericanExpress = (value) => {
  debug('call:isAmericanExpress(%o)', value);

  return REGEX.test(value) && isLuhn(value);
};

// export as commonjs module
module.exports = isAmericanExpress;