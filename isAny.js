'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAny');
const toCallable = require('./util/toCallable');

const isAny = (value, ...args) => {
  debug('call:isAny(%o, %o)', value, args);

  return args.some((func) => {
    return toCallable(func)(value);
  });
};

// export as commonjs module
module.exports = isAny;