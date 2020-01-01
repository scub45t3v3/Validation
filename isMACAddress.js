'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isMACAddress');
const REGEX = /^(?:[a-f\d]{2}:){5}[a-f\d]{2}$/i;

const isMACAddress = (value) => {
  debug('call:isMACAddress(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isMACAddress;