'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isUUID');
  const REGEX = /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i;

  const isUUID = (value) => {
    debug('call:isUUID(%o)', value);

    return REGEX.test(value);
  };

  module.exports = isUUID;
})(); // end IIFE