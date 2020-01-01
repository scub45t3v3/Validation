'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isExtensible');

const isExtensible = (value) => {
  debug('call:isExtensible(%o)', value);

  return Object.isExtensible(value);
};

// export as commonjs module
module.exports = isExtensible;