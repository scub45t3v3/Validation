'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isArguments');

  const isArguments = (value) => {
    debug('call:isArguments(%o)', value);

    return (value && (value.toString() || `${value}`)) === '[object Arguments]';
  };

  // export as commonjs module
  module.exports = isArguments;
})(); // end IIFE