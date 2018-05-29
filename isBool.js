(function() {
  var isBool;

  isBool = function(value) {
    return value instanceof Boolean || value === true || value === false;
  };

  module.exports = isBool;

}).call(this);
