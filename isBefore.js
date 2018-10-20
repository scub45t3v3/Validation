'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isBefore');
  const moment = require('moment');
  const isFloat = require('./isFloat');
  const isDate = require('./isDate');

  const isBefore = (value, compare = Date.now()) => {
    debug('call:isBefore(%o, %o)', value, compare);

    if (isFloat(value) && isFloat(compare)) {
      return parseFloat(value) < parseFloat(compare);
    } else if (isDate(value)) {
      return moment(value).isBefore(compare);
    }

    return false;
  };

  // export as commonjs module
  module.exports = isBefore;
})(); // end IIFE