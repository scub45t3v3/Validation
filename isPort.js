'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPort');
  const isInteger = require('./isInteger');

  const isPort = (value) => {
    debug('call:isPort(%o)', value);

    return isInteger(value, {
      min: 1,
      max: 65535,
    });
  };

  // export as commonjs module
  module.exports = isPort;
})(); // end IIFE