'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isISSN');
const REGEX = /^\d{4}-?\d{3}[\dX]$/iu;

const isISSN = (value) => {
  debug('call:isISSN(%o)', value);

  if (!REGEX.test(value)) {
    return false;
  }

  const sum = `${value}`
    .toUpperCase()
    .replace(/[^\dX]/giu, '')
    .split('')
    .reverse()
    .reduce((memo, val, idx) => {
      idx++; // convert from 0 base
      val = (val === 'X' && 10) || +val;

      return memo + (idx * val);
    }, 0);

  return !(sum % 11);
};

// export as commonjs module
module.exports = isISSN;