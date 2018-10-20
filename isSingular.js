'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSingular');
  const pluralize = require('pluralize');
  const isString = require('./isString');

  const isSingular = (value) => {
    debug('call:isSingular(%o)', value);

    return isString(value) && pluralize.isSingular(value);
  };

  // export as commonjs module
  module.exports = isSingular;
})(); // end IIFE