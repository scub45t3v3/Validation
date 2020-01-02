'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isURL');
const isDomainName = require('./isDomainName');
const isIP = require('./isIP');
const REGEX = /^[a-z][a-z\d+.-]+:\/\/(?:(?:[\w!$&'()*+,;:=~.-]|%[\da-f]{2})+@)?(?<domain>[^\s:[\]/%?#@]+|\[[:.%\w]+\])(?::\d+)?(?:\/(?:[\w!$&'()*+,;:@=~.-]|%[\da-f]{2})+)*\/?(?:\?(?:[\w!$&'()*+,;:@=~?/.-]|%[\da-f]{2})*)?(?:#(?:[\w!$&'()*+,;:@=~?/.-]|%[\da-f]{2})*)?$/iu;

const isURL = (value) => {
  debug('call:isURL(%o)', value);

  try {
    value = REGEX.exec(value).groups.domain.replace(/^\[|\]$/gu, '');

    return isDomainName(value) || isIP(value);
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isURL;