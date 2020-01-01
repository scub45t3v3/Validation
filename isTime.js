'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isTime');
const REGEX = /^([0-1]?\d|2[0-3])(?::?([0-5]\d)(?::?([0-5]\d)(?:[.,](\d{1,9}))?)?)?\s*((?:[ap][.,\s-]*m[.,-]*)(?!\w))?\s*(Z|[+-](?:[0-1]?\d|2[0-3])(?::?[0-5]\d)?|[a-z]{2,5}|[a-z\u00c0-\u024f\s'-]+time|[a-z_]{1,256}\/[a-z_]{1,256})?$/i;

const isTime = (value) => {
  debug('call:isTime(%o)', value);

  try {
    value = (value.toString() || `${value}`).trim().match(REGEX);

    return value[5] == null || parseInt(value[1]) < 13;
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isTime;