'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isGenerator');

  const isGenerator = (value) => {
    debug('call:isGenerator(%o)', value);

    return !!value && (value.toString() || `${value}`) === '[object Generator]';
  };

  module.exports = isGenerator;
})(); // end IIFE