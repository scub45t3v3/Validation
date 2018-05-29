(function() {
  var _, isAll, toCallable;

  _ = require('underscore');

  toCallable = require('./util/toCallable');

  isAll = function(value, ...args) {
    args = _.map(args, toCallable);
    return _.all(args, function(func) {
      return func(value);
    });
  };

  module.exports = isAll;

}).call(this);
