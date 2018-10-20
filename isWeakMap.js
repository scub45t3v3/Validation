'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isWeakMap');

  const isWeakMap = (value) => {
    debug('call:isWeakMap(%o)', value);

    return value instanceof WeakMap;
  };

  // export as commonjs module
  module.exports = isWeakMap;
})(); // end IIFE