'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isMastercard');
const isLuhn = require('./isLuhn');
const REGEX = /^(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/;

const isMastercard = (value) => {
  debug('call:isMastercard(%o)', value);

  return REGEX.test(value) && isLuhn(value);
};

// export as commonjs module
module.exports = isMastercard;