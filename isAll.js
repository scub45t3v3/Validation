'use strict';

// include dependencies
const _ = require('underscore');
const debug = require('debug')('@scuba-squad:validation:isAll');
const toCallable = require('./util/toCallable');

const isAll = (value, ...args) => {
  debug('call:isAll(%o, %o)', value, args);

  args = _.map(args, toCallable);

  return _.all(args, (func) => {
    debug('call:%s(%o)', func.name, value);

    return func(value);
  });
};

// export as commonjs module
module.exports = isAll;