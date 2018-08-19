'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isNull');

  const isNull = (value) => {
    debug('call:isNull(%o)', value);

    return value === null;
  };

  module.exports = isNull;
})(); // end IIFE