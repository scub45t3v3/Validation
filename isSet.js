'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSet');

  const isSet = (value) => {
    debug('call:isSet(%o)', value);

    return value instanceof Set;
  };

  // export as commonjs module
  module.exports = isSet;
})(); // end IIFE