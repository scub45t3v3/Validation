'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isISRC');
const REGEX = /^[a-z]{2}[a-z\d]{3}\d{7}$/iu;

const isISRC = (value) => {
  debug('call:isISRC(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isISRC;