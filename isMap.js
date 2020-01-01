'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isMap');

const isMap = (value) => {
  debug('call:isMap(%o)', value);

  return value instanceof Map;
};

// export as commonjs module
module.exports = isMap;