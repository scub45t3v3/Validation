(function() {
  var debug, isInteger, isPort;

  debug = require('debug')('@scuba-squad:validation:isPort');

  isInteger = require('./isInteger');

  isPort = function(value) {
    debug('call:isPort(%o)', value);
    return isInteger(value, {
      min: 1,
      max: 65535
    });
  };

  module.exports = isPort;

}).call(this);
