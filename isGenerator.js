'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isGenerator');

const isGenerator = (value) => {
  debug('call:isGenerator(%o)', value);

  return `${value}` === '[object Generator]';
};

// export as commonjs module
module.exports = isGenerator;