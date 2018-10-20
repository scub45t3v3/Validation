'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isDinersClub');
  const isLuhn = require('./isLuhn');
  const REGEX = /^3(?:0[0-5]|[68]\d)\d{11}$/;

  const isDinersClub = (value) => {
    debug('call:isDinersClub(%o)', value);

    return REGEX.test(value) && isLuhn(value);
  };

  // export as commonjs module
  module.exports = isDinersClub;
})(); // end IIFE