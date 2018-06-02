(function() {
  var debug, isFrozen;

  debug = require('debug')('@scuba-squad:validation:isFrozen');

  isFrozen = function(value) {
    debug('call:isFrozen(%o)', value);
    return Object.isFrozen(value);
  };

  module.exports = isFrozen;

}).call(this);
