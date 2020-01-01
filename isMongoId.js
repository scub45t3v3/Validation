'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isMongoId');
const isAll = require('./isAll');

const isMongoId = (value) => {
  debug('call:isMongoId(%o)', value);

  return isAll(value, 'isHexadecimal', ['isLength', 24]);
};

// export as commonjs module
module.exports = isMongoId;