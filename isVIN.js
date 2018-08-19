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

    char = (char && char.toUpperCase()) || undefined;

    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(char) % 10;
  };

  const getCheckDigit = (value) => {
    debug('call:getCheckDigit(%o)', value);

    const map = '0123456789X';
    const weights = '8765432X098765432';

    let sum = 0;

    value = value.toUpperCase().split('');

    for (let idx = 0; idx < value.length; idx++) {
      const char = value[idx];

      sum += transliterate(char) * map.indexOf(weights[idx]);
    }

    return map[sum % 11];
  };

  module.exports = isVIN;
})(); // end IIFE