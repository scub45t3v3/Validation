'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isIterable');

const isIterable = (value) => {
  debug('call:isIterable(%o)', value);

  return typeof value[Symbol.iterator] === 'function';
};

// export as commonjs module
module.exports = isIterable;