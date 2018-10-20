'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isWeakSet');

  const isWeakSet = (value) => {
    debug('call:isWeakSet(%o)', value);

    return value instanceof WeakSet;
  };

  // export as commonjs module
  module.exports = isWeakSet;
})(); // end IIFE