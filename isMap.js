(function() {
  var isMap;

  isMap = function(value) {
    return value instanceof Map;
  };

  module.exports = isMap;

}).call(this);
