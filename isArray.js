'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isArray');

  const isArray = (value) => {
    debug('call:isArray(%o)', value);

    return Array.isArray(value);
  };

  module.exports = isArray;
})(); // end IIFE