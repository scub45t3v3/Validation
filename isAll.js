'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:validation:isAll');
const toCallable = require('./util/toCallable');

const isAll = (value, ...args) => {
  debug('call:isAll(%o, %o)', value, args);

  return args.every((func) => {
    return toCallable(func)(value);
  });
};

// export as commonjs module
module.exports = isAll;