'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAfter');
const moment = require('moment');
const isFloat = require('./isFloat');
const isDate = require('./isDate');

const isAfter = (value, compare = Date.now()) => {
  debug('call:isAfter(%o, %o)', value, compare);

  if (isFloat(value) && isFloat(compare)) {
    return parseFloat(value) > parseFloat(compare);
  } else if (isDate(value)) {
    return moment(value).isAfter(compare);
  }

  return false;
};

// export as commonjs module
module.exports = isAfter;