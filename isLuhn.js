'use strict';

(() => {
  // include dependencies
  const _ = require('underscore');
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

    value = (value && (value.toString() || `${value}`).split('').reverse()) || undefined;

    const sum = _.reduce(value, (memo, val, idx) => {
      val = parseInt(val);

      if (parseInt(idx) % 2) {
        return memo + DOUBLE[val];
      }

      return memo + val;
    }, 0);

    return !(sum % 10);
  };

  module.exports = isLuhn;
})(); // end IIFE