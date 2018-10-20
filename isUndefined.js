'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isUndefined');

  const isUndefined = (value) => {
    debug('call:isUndefined(%o)', value);

    return value === undefined;
  };

  // export as commonjs module
  module.exports = isUndefined;
})(); // end IIFE