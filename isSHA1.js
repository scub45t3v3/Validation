'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:debug');
  const isAll = require('./isAll');

  const isSHA1 = (value) => {
    debug('call:isSHA1(%o)', value);

    return isAll(value, 'isHexadecimal', ['isLength', 40]);
  };

  // export as commonjs module
  module.exports = isSHA1;
})(); // end IIFE