'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isURN');
const REGEX = /^urn:(?<nid>[a-z\d][a-z\d-]{0,30}[a-z\d]):(?<nss>(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/]|%[\da-fA-F]{2})*)(?<resolver>\?\+(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?(?<query>\?=(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?(?<fragment>#(?:[\w.\-~!$&'()*+,;=':@/?]|%[\da-fA-F]{2})*)?$/iu;

const isURN = (value) => {
  debug('call:isURN(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isURN;