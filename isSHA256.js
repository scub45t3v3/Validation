'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSHA256');
  const isAll = require('./isAll');

  const isSHA256 = (value) => {
    debug('call:isSHA256(%o)', value);

    return isAll(value, 'isHexadecimal', ['isLength', 64]);
  };

  module.exports = isSHA256;
})(); // end IIFE