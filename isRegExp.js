'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isRegExp');

  const isRegExp = (value) => {
    debug('call:isRegExp(%o)', value);

    return value instanceof RegExp;
  };

  // export as commonjs module
  module.exports = isRegExp;
})(); // end IIFE