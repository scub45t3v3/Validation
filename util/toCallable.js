'use strict';

// include dependencies
const _ = require('underscore');
const debug = require('debug')('@scuba-squad:validation:util:toCallable');
const isFunction = require('../isFunction');
const isString = require('../isString');
const isRegExp = require('../isRegExp');
const isArray = require('../isArray');

const toCallable = (value) => {
  debug('call:toCallable(%o)', value);

  if (isFunction(value)) {
    return value;
  }

  if (isString(value)) {
    return require(`../${value}`);
  }

  if (isRegExp(value)) {
    return value.test.bind(value);
  }

  if (isArray(value)) {
    const func = toCallable(_.first(value));
    const rest = _.rest(value, 1);

    return _.partial(func, _, ...rest);
  }

  throw new TypeError(`${value} can not be called`);
}; // end toCallable

// export as commmonjs module
module.exports = toCallable;