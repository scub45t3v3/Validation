'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isBase64');
const isRegExp = require('./isRegExp');
const REGEX = /^[a-z\d+/]+={0,2}$/i;

const isBase64 = (value) => {
  debug('call:isBase64(%o)', value);

  return value
    && !isRegExp(value)
    && REGEX.test(value)
    && !(value.length % 4);
};

// export as commonjs module
module.exports = isBase64;