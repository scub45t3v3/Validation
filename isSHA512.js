'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSHA512');
  const isAll = require('./isAll');

  const isSHA512 = (value) => {
    debug('call:isSHA512(%o)', value);

    return isAll(value, 'isHexadecimal', ['isLength', 128]);
  };

  module.exports = isSHA512;
})(); // end IIFE