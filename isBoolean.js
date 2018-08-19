'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isBoolean');

  const isBoolean = (value) => {
    debug('call:isBoolean(%o)', value);

    return value instanceof Boolean || value === true || value === false;
  };

  module.exports = isBoolean;
})(); // end IIFE