'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isURL');
const URL = require('@scuba-squad/url');

const isURL = (value) => {
  debug('call:isURL(%o)', value);

  try {
    return !!URL(value).host;
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isURL;