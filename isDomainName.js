'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isDomainName');
const punycode = require('punycode');
const REGEX = /^(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z][a-z\d-]*[a-z\d]$/iu;

const isDomainName = (value, idn = true) => {
  debug('call:isDomainName(%o, %o)', value, idn);

  if (idn) {
    try {
      value = punycode.toASCII(value);
    } catch (error) {
      return false;
    }
  }

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isDomainName;