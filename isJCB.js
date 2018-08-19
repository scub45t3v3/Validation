'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isJCB');
  const isLuhn = require('./isLuhn');
  const REGEX = /^(?:2131|1800|35\d{3})\d{11}$/;

  const isJCB = (value) => {
    debug('call:isJCB(%o)', value);

    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isJCB;
})(); // end IIFE