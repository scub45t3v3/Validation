'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAlpha');
const REGEX = /^[a-z]+$/iu;

const isAlpha = (value) => {
  debug('call:isAlpha(%o)', value);

  return value != null && REGEX.test(value);
};

// export as commonjs module
module.exports = isAlpha;