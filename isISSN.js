'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isISSN');
  const REGEX = /^\d{4}-?\d{3}[\dX]$/i;

  const isISSN = (value) => {
    debug('call:isISSN(%o)', value);

    let sum = 0;

    if (!REGEX.test(value)) {
      return false;
    }

    value = value.replace(/[^\dX]/gi, '').split('');

    if (/^x$/i.test(value[7])) {
      value[7] = 10;
    }

    for (let idx = 0; idx < value.length; idx++) {
      const val = parseInt(value[idx]);

      sum += (8 - idx) * val;
    }

    return !(sum % 11);
  };

  // export as commonjs module
  module.exports = isISSN;
})(); // end IIFE