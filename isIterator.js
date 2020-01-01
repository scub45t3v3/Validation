'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isIterator');
const isBoolean = require('./isBoolean');

const isIterator = (value) => {
  debug('call:isIterator(%o)', value);

  try {
    return isBoolean(value.next().done);
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isIterator;