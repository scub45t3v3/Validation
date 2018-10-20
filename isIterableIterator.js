'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isIterableIterator');

  const isIterableIterator = (value) => {
    debug('call:isIterableIterator(%o)', value);

    try {
      return value[Symbol.iterator]() === value;
    } catch (error) {
      return false;
    }
  };

  // export as commonjs module
  module.exports = isIterableIterator;
})(); // end IIFE