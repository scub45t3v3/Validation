'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isLatitude');
const isFloat = require('./isFloat');

const isLatitude = (value) => {
  debug('call:isLatitude(%o)', value);

  return isFloat(value, {
    min: -90,
    max: 90,
  });
};

// export as commonjs module
module.exports = isLatitude;