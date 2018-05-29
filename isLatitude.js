(function() {
  var isFloat, isLatitude;

  isFloat = require('./isFloat');

  isLatitude = function(value) {
    return isFloat(value, {
      min: -90,
      max: 90
    });
  };

  module.exports = isLatitude;

}).call(this);
