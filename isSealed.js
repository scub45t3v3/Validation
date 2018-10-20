'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSealed');

  const isSealed = (value) => {
    debug('call:isSealed(%o)', value);

    return Object.isSealed(value);
  };

  // export as commonjs module
  module.exports = isSealed;
})(); // end IIFE