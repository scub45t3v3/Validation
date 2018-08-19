'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isAscii');
  const REGEX = /^[\x00-\x7F]+$/; // eslint-disable-line no-control-regex

  const isAscii = (value) => {
    debug('call:isAscii(%o)', value);

    return (value != null) && REGEX.test(value);
  };

  module.exports = isAscii;
})(); // end IIFE