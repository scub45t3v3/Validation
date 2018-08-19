'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isDiscover');
  const isLuhn = require('./isLuhn');
  const REGEX = /^6(?:011|5\d{2})\d{12}$/;

  const isDiscover = (value) => {
    debug('call:isDiscover(%o)', value);

    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isDiscover;
})(); // end IIFE