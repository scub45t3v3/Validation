'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isDataURI');
const REGEX = /^data:(?:[\w-]+\/[\w.+-]+(?:;[\w!#$%&'*+.^`{|}~-]+=[\w!#$%&'*+.^`{|}~-]+)*)?(?:;base64)?,[\w()/!$&'*+.,;=~:@?%-]*$/iu;

const isDataURI = (value) => {
  debug('call:isDataURI(%o)', value);

  return REGEX.test(value);
};

// export as commonjs module
module.exports = isDataURI;