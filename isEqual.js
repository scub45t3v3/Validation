'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isEqual');
  const {isEqual: _isEqual} = require('underscore');

  const isEqual = (value, compare) => {
    debug('call:isEqual(%o, %o)', value, compare);

    return _isEqual(value, compare);
  };

  // export as commonjs module
  module.exports = isEqual;
})(); // end IIFE