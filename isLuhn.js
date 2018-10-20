'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isLuhn');
  const REGEX = /^\d+$/;
  const DOUBLE = [
    0,
    2,
    4,
    6,
    8,
    1,
    3,
    5,
    7,
    9,
  ];

  const isLuhn = (value) => {
    debug('call:isLuhn(%o)', value);

    if (!REGEX.test(value)) {
      return false;
    }

    const sum = `${value}`
      .split('')
      .reverse()
      .reduce((memo, val, idx) => {
        val = +val;

        if (idx % 2) {
          return memo + DOUBLE[val];
        }

        return memo + val;
      }, 0);

    return !(sum % 10);
  };

  // export as commonjs module
  module.exports = isLuhn;
})(); // end IIFE