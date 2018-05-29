(function() {
  var _, isArray, isFunction, isString, toCallable;

  _ = require('underscore');

  isFunction = require('../isFunction');

  isString = require('../isString');

  isArray = require('../isArray');

  toCallable = function(value) {
    var func;
    if (isFunction(value)) {
      return value;
    }
    if (isString(value)) {
      return require(`../${value}`);
    }
    if (isArray(value)) {
      func = toCallable(_.first(value));
      return _.partial(func, _, ..._.rest(value, 1));
    }
    throw new TypeError(`${value} can not be called`);
  };

  module.exports = toCallable;

}).call(this);
