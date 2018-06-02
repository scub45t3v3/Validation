(function() {
  var debug, isSet;

  debug = require('debug')('@scuba-squad:validation:isSet');

  isSet = function(value) {
    debug('call:isSet(%o)', value);
    return value instanceof Set;
  };

  module.exports = isSet;

}).call(this);
