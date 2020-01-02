'use strict';

// include dependencies
const _ = require('underscore');
const debug = require('debug')('@scuba-squad:validation:isAny');
const toCallable = require('./util/toCallable');

const isAny = (value, ...args) => {
  debug('call:isAny(%o, %o)', value, args);

  args = _.map(args, toCallable);

  return _.any(args, (func) => {
    return func(value);
  });
};

// export as commonjs module
module.exports = isAny;