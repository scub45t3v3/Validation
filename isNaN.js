'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isNaN');

  const isNaN = (value) => {
    debug('call:isNaN(%o)', value);

    return Number.isNaN(value);
  };

  // export as commonjs module
  module.exports = isNaN;
})(); // end IIFE