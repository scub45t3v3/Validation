'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isFrozen');

const isFrozen = (value) => {
  debug('call:isFrozen(%o)', value);

  return Object.isFrozen(value);
};

// export as commonjs module
module.exports = isFrozen;