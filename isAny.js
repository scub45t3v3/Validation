(function() {
  var _, debug, isAny, toCallable;

  _ = require('underscore');

  debug = require('debug')('@scuba-squad:validation:isAny');

  toCallable = require('./util/toCallable');

  isAny = function(value, ...args) {
    debug('call:isAny(%o, %o)', value, args);
    args = _.map(args, toCallable);
    return _.any(args, function(func) {
      debug('call:%s(%o)', func.name, value);
      return func(value);
    });
  };

  module.exports = isAny;

}).call(this);
