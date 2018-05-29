(function() {
  var _, isAny, toCallable;

  _ = require('underscore');

  toCallable = require('./util/toCallable');

  isAny = function(value, ...args) {
    args = _.map(args, toCallable);
    return _.any(args, function(func) {
      return func(value);
    });
  };

  module.exports = isAny;

}).call(this);
