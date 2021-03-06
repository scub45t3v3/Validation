'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isFunction');

const isFunction = (value) => {
  debug('call:isFunction(%o)', value);

  return typeof value === 'function';
};

// export as commonjs module
module.exports = isFunction;