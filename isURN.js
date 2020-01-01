'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isURN');
const REGEX = /^urn:([a-z\d][a-z\d-]{0,30}[a-z\d]):((?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/]|%[\da-fA-F]{2})*)(\?\+(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?(\?=(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?(#(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?$/i;

const isURN = (value) => {
  debug('call:isURN(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isURN;