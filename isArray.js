(function() {
  var debug, isArray;

  debug = require('debug')('@scuba-squad:validation:isArray');

  isArray = function(value) {
    debug('call:isArray(%o)', value);
    return Array.isArray(value);
  };

  module.exports = isArray;

}).call(this);
