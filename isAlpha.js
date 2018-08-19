'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isAlpha');
  const REGEX = /^[a-z]+$/i;

  const isAlpha = (value) => {
    debug('call:isAlpha(%o)', value);

    return (value != null) && REGEX.test(value);
  };

  module.exports = isAlpha;
})(); // end IIFE