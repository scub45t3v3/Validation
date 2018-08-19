'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isISBN');
  const REGEX_10 = /^\d{9}[\dX]$/;
  const REGEX_13 = /^\d{13}$/;

  const isISBN = (value, version) => {
    debug('call:isISBN(%o, %o)', value, version);

    const sanitized = (value && (value.toString() || `${value}`).toUpperCase().replace(/[\s-]+/g, '')) || undefined;
    version || (version = (sanitized && sanitized.length) || undefined);

    switch (version) {
      case 10:
      case '10':
        return isISBN10(sanitized);
      case 13:
      case '13':
        return isISBN13(sanitized);
      default:
        return false;
    }
  }; // end ISISBN

  const isISBN10 = (value) => {
    debug('call:isISBN10(%o)', value);

    let sum = 0;

    if (!REGEX_10.test(value)) {
      return false;
    }

    value = value.split('').reverse();

    if (value[0] === 'X') {
      value[0] = 10;
    }

    for (let idx = 0; idx < value.length; idx++) {
      const val = value[idx];

      sum += (idx + 1) * parseInt(val);
    }

    return !(sum % 11);
  }; // end ISISBN10

  const isISBN13 = (value) => {
    debug('call:isISBN13(%o)', value);

    let sum = 0;

    if (!REGEX_13.test(value)) {
      return false;
    }

    value = value.split('');

    for (let idx = 0; idx < value.length; idx++) {
      let val = parseInt(value[idx]);

      if (idx % 2) {
        val *= 3;
      }

      sum += val;
    }

    return !(sum % 10);
  }; // end isISBN13

  // export as commonjs module
  module.exports = isISBN;
})(); // end IIFE