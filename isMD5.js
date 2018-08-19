'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isMD5');
  const isAll = require('./isAll');

  const isMD5 = (value) => {
    debug('call:isMD5(%o)', value);

    return isAll(value, 'isHexadecimal', ['isLength', 32]);
  };

  module.exports = isMD5;
})(); // end IIFE