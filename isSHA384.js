'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSHA384');
  const isAll = require('./isAll');

  const isSHA384 = (value) => {
    debug('call:isSHA384(%o)', value);

    return isAll(value, 'isHexadecimal', ['isLength', 96]);
  };

  // export as commonjs module
  module.exports = isSHA384;
})(); // end IIFE