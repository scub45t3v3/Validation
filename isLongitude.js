(function() {
  var debug, isFloat, isLongitude;

  debug = require('debug')('@scuba-squad:validation:isLongitude');

  isFloat = require('./isFloat');

  isLongitude = function(value) {
    debug('call:isLongitude(%o)', value);
    return isFloat(value, {
      min: -180,
      max: 180
    });
  };

  module.exports = isLongitude;

}).call(this);
