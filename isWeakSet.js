(function() {
  var isWeakSet;

  isWeakSet = function(value) {
    return value instanceof WeakSet;
  };

  module.exports = isWeakSet;

}).call(this);
