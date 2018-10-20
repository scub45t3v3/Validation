'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isVIN');
  const REGEX = /^[a-hj-nprs-z\d]{17}$/i;

  const isVIN = (value) => {
    debug('call:isVIN(%o)', value);

    if (!REGEX.test(value)) {
      return false;
    }

    return getCheckDigit(value) === value[8].toUpperCase();
  };

  const transliterate = (char) => {
    debug('call:transliterate(%o)', char);

    char = char && char.toUpperCase();

    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(char) % 10;
  };

  const getCheckDigit = (value) => {
    debug('call:getCheckDigit(%o)', value);

    const map = '0123456789X';
    const weights = '8765432X098765432';
    const sum = value
      .toUpperCase()
      .split('')
      .reduce((memo, char, idx) => {
        return memo + (transliterate(char) * map.indexOf(weights[idx]));
      }, 0);

    return map[sum % 11];
  };

  module.exports = isVIN;
})(); // end IIFE