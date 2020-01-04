'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isISBN');
const REGEX_10 = /^\d{9}[\dX]$/u;
const REGEX_13 = /^\d{13}$/u;

const isISBN = (value, version) => {
  debug('call:isISBN(%o, %o)', value, version);
  const sanitized = (value && `${value}`.replace(/[\s-]+/gu, '')) || '';
  version || (version = sanitized.length);

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
}; // end isISBN

const isISBN10 = (value) => {
  debug('call:isISBN10(%o)', value);

  if (!REGEX_10.test(value)) {
    return false;
  }

  const sum = `${value}`
    .toUpperCase()
    .split('')
    .reverse()
    .reduce((memo, val, idx) => {
      idx++; // convert from 0 base
      val = (val === 'X' && 10) || +val;

      return memo + (idx * val);
    }, 0);

  return !(sum % 11);
}; // end isISBN10

const isISBN13 = (value) => {
  debug('call:isISBN13(%o)', value);

  if (!REGEX_13.test(value)) {
    return false;
  }

  const sum = value
    .split('')
    .reduce((memo, val, idx) => {
      val = +val;

      if (idx % 2) {
        val *= 3;
      }

      return memo + val;
    }, 0);

  return !(sum % 10);
}; // end isISBN13

// export as commonjs module
module.exports = isISBN;