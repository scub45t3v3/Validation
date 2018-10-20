'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isVisa');
  const isLuhn = require('./isLuhn');
  const REGEX = /^4\d{12}(?:\d{3})?$/;

  const isVisa = (value) => {
    debug('call:isVisa(%o)', value);

    return REGEX.test(value) && isLuhn(value);
  };

  // export as commonjs module
  module.exports = isVisa;
})(); // end IIFE