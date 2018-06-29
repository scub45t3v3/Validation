(function() {
  var _, debug, isArray, isFunction, isRegExp, isString, toCallable;

  _ = require('underscore');

  debug = require('debug')('@scuba-squad:validation:util:toCallable');

  isFunction = require('../isFunction');

  isString = require('../isString');

  isRegExp = require('../isRegExp');

  isArray = require('../isArray');

  toCallable = function(value) {
    var func;
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
      func = toCallable(_.first(value));
      return _.partial(func, _, ..._.rest(value, 1));
    }
    debug('error:value %o can not be converted to a function', value);
    throw new TypeError(`${value} can not be called`);
  };

  module.exports = toCallable;

}).call(this);
