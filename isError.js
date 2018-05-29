(function() {
  var isError;

  isError = function(value) {
    return value instanceof Error;
  };

  module.exports = isError;

}).call(this);
