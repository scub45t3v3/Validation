(function() {
  var _, debug, isAll, toCallable;

  _ = require('underscore');

  debug = require('debug')('@scuba-squad:validation:isAll');

  toCallable = require('./util/toCallable');

  isAll = function(value, ...args) {
    debug('call:isAll(%o, %o)', value, args);
    args = _.map(args, toCallable);
    return _.all(args, function(func) {
      debug('call:%s(%o)', func.name, value);
      return func(value);
    });
  };

  module.exports = isAll;

}).call(this);
