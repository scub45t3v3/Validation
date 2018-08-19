'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isMatch');
  const {isMatch: _isMatch} = require('underscore');

  const isMatch = (value, compare) => {
    debug('call:isMatch(%o, %o)', value, compare);

    return _isMatch(value, compare);
  };

  module.exports = isMatch;
})(); // end IIFE