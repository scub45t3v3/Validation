'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isEmpty');
const {isEmpty: _isEmpty} = require('underscore');

const isEmpty = (value) => {
  debug('call:isEmpty(%o)', value);

  return _isEmpty(value);
};

// export as commonjs module
module.exports = isEmpty;