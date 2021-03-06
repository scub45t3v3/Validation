'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isHexadecimal');
const REGEX = /^[a-f\d]+$/iu;

const isHexadecimal = (value) => {
  debug('call:isHexadecimal(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isHexadecimal;