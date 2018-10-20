'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:validation:isSemVer');
  const REGEX = /^(?:\d+\.){2}\d+(?:-(?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*)(?:\.(?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*))*)?(?:\+[a-z\d-]+(?:\.[a-z\d-]+)*)?$/i;

  const isSemVer = (value) => {
    debug('call:isSemVer(%o)', value);

    return REGEX.test(value);
  };

  // export as commonjs module
  module.exports = isSemVer;
})(); // end IIFE