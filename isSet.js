(function() {
  var isSet;

  isSet = function(value) {
    return value instanceof Set;
  };

  module.exports = isSet;

}).call(this);
