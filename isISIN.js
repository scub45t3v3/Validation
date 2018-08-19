'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isISIN');
  const isLuhn = require('./isLuhn');
  const REGEX = /^[a-z\d]{12}$/i;

  const isISIN = (value) => {
    debug('call:isISIN(%o)', value);

    const sanitized = (value && (value.toString() || `${value}`).replace(/[a-z]/gim, (match) => {
      return `${parseInt(match, 36)}`;
    })) || undefined;

    return REGEX.test(value) && isLuhn(sanitized);
  };

  module.exports = isISIN;
})(); // end IIFE