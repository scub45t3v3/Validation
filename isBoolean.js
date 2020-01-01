'use strict';

const debug = require('debug')('@scuba-squad:validation:isBoolean');

const isBoolean = (value) => {
  debug('call:isBoolean(%o)', value);

  return value instanceof Boolean || value === true || value === false;
};

// export as commonjs module
module.exports = isBoolean;