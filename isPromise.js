(function() {
  var isPromise;

  isPromise = function(value) {
    return value instanceof Promise;
  };

  module.exports = isPromise;

}).call(this);
