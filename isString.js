'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isString');

  const isString = (value) => {
    debug('call:isString(%o)', value);

    return value instanceof String || typeof value === 'string';
  };

  // export as commonjs module
  module.exports = isString;
})(); // end IIFE