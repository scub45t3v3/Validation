'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isLongitude');
const isFloat = require('./isFloat');

const isLongitude = (value) => {
  debug('call:isLongitude(%o)', value);

  return isFloat(value, {
    min: -180,
    max: 180,
  });
};

// export as commonjs module
module.exports = isLongitude;