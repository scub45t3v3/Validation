(function() {
  var debug, isError;

  debug = require('debug')('@scuba-squad:validation:isError');

  isError = function(value) {
    debug('call:isError(%o)', value);
    return value instanceof Error;
  };

  module.exports = isError;

}).call(this);
