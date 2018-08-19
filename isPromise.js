'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPromise');

  const isPromise = (value) => {
    debug('call:isPromise(%o)', value);

    return value instanceof Promise;
  };

  module.exports = isPromise;
})(); // end IIFE