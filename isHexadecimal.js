'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isHexadecimal');
  const REGEX = /^[a-f\d]+$/i;

  const isHexadecimal = (value) => {
    debug('call:isHexadecimal(%o)', value);

    return REGEX.test(value);
  };

  module.exports = isHexadecimal;
})(); // end IIFE