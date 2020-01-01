'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isSymbol');
const REGEX = /^Symbol\(.*\)$/;

const isSymbol = (value) => {
  debug('call:isSymbol(%o)', value);

  return typeof value === 'symbol' || REGEX.test(value);
};

// export as commonjs module
module.exports = isSymbol;