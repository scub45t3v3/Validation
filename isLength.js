'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isLength');
  const isInteger = require('./isInteger');

  const isLength = (value, opt = {}) => {
    debug('call:isLength(%o, %o)', value, opt);

    const length = (value && (value.length || value.size)) || undefined;

    if (isInteger(opt)) {
      opt = {
        min: opt,
        max: opt,
      };
    }

    try {
      opt.min || (opt.min = 1);
      opt.safe = true;

      return isInteger(length, opt);
    } catch (error) {
      return false;
    }
  };

  module.exports = isLength;
})(); // end IIFE