(function() {
  var isWeakMap;

  isWeakMap = function(value) {
    return value instanceof WeakMap;
  };

  module.exports = isWeakMap;

}).call(this);
