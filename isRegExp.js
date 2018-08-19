'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isRegExp');

  const isRegExp = (value) => {
    debug('call:isRegExp(%o)', value);

    return value instanceof RegExp;
  };

  module.exports = isRegExp;
})(); // end IIFE