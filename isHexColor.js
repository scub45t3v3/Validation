'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isHexColor');
  const REGEX = /^#?(?:[a-f\d]{3}){1,2}$/i;

  const isHexColor = (value) => {
    debug('call:isHexColor(%o)', value);

    return REGEX.test(value);
  };

  module.exports = isHexColor;
})(); // end IIFE