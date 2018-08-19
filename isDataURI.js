'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isDataURI');
  const REGEX = /^data:(?:[\w-]+\/[\w.+-]+(?:;[\w!#$%&'*+.^`{|}~-]+=[\w!#$%&'*+.^`{|}~-]+)*)?(?:;base64)?,[\w()/!$&'*+.,;=~:@?%-]*$/i; // schema

  const isDataURI = (value) => {
    debug('call:isDataURI(%o)', value);

    return REGEX.test(value);
  };

  module.exports = isDataURI;
})(); // end IIFE