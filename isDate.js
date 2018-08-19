'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isDate');
  const moment = require('moment');
  const isRegExp = require('./isRegExp');

  const isDate = (value) => {
    debug('call:isDate(%o)', value);

    return !isRegExp(value) && moment(value).isValid();
  };

  module.exports = isDate;
})(); // end IIFE