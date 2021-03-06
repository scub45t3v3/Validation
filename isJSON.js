'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isJSON');

const isJSON = (value) => {
  debug('call:isJSON(%o)', value);

  try {
    JSON.parse(value);

    return true;
  } catch (error) {
    return false;
  }
};

// export as commonjs module
module.exports = isJSON;