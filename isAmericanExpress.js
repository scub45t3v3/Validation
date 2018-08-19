'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isAmericanExpress');
  const isLuhn = require('./isLuhn');
  const REGEX = /^3[47][0-9]{13}$/;

  const isAmericanExpress = (value) => {
    debug('call:isAmericanExpress(%o)', value);

    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isAmericanExpress;
})(); // end IIFE