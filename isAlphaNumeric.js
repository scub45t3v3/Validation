'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAlphaNumeric');
const REGEX = /^[a-z\d]+$/iu;

const isAlphaNumeric = (value) => {
  debug('call:isAlphaNumeric(%o)', value);

  return (value != null) && REGEX.test(value);
};

// export as commonjs module
module.exports = isAlphaNumeric;