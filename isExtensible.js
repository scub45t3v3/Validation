(function() {
  var debug, isExtensible;

  debug = require('debug')('@scuba-squad:validation:isExtensible');

  isExtensible = function(value) {
    debug('call:isExtensible(%o)', value);
    return Object.isExtensible(value);
  };

  module.exports = isExtensible;

}).call(this);
