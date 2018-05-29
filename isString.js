(function() {
  var isString;

  isString = function(value) {
    return value instanceof String || typeof value === 'string';
  };

  module.exports = isString;

}).call(this);
