'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isPrimitive');
const PRIMITIVES = [
  'boolean',
  'string',
  'number',
  'symbol',
];

const isPrimitive = (value) => {
  debug('call:isPrimitive(%o)', value);

  return value == null || PRIMITIVES.includes(typeof value);
};

// export as commonjs module
module.exports = isPrimitive;