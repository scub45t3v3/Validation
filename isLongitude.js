(function() {
  var isFloat, isLongitude;

  isFloat = require('./isFloat');

  isLongitude = function(value) {
    return isFloat(value, {
      min: -180,
      max: 180
    });
  };

  module.exports = isLongitude;

}).call(this);
