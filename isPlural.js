'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isPlural');
  const pluralize = require('pluralize');
  const isString = require('./isString');

  const isPlural = (value) => {
    debug('call:isPlural(%o)', value);

    return isString(value) && pluralize.isPlural(value);
  };

  module.exports = isPlural;
})(); // end IIFE