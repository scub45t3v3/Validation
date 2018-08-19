'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isUndefined');

  const isUndefined = (value) => {
    debug('call:isUndefined(%o)', value);

    return value === undefined;
  };

  module.exports = isUndefined;
})(); // end IIFE