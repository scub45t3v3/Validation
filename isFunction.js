(function() {
  var isFunction;

  isFunction = function(value) {
    return typeof value === 'function';
  };

  module.exports = isFunction;

}).call(this);
