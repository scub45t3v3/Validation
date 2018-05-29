(function() {
  var isIterable;

  isIterable = function(value) {
    return typeof value[Symbol.iterator] === 'function';
  };

  module.exports = isIterable;

}).call(this);
