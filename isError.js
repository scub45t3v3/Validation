'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isError');

  const isError = (value) => {
    debug('call:isError(%o)', value);

    return value instanceof Error;
  };

  module.exports = isError;
})(); // end IIFE