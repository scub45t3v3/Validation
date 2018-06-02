(function() {
  var debug, isBool;

  debug = require('debug')('@scuba-squad:validation:isBool');

  isBool = function(value) {
    debug('call:isBool(%o)', value);
    return value instanceof Boolean || value === true || value === false;
  };

  module.exports = isBool;

}).call(this);
