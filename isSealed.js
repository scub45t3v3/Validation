(function() {
  var debug, isSealed;

  debug = require('debug')('@scuba-squad:validation:isSealed');

  isSealed = function(value) {
    debug('call:isSealed(%o)', value);
    return Object.isSealed(value);
  };

  module.exports = isSealed;

}).call(this);
