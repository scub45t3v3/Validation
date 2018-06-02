(function() {
  var debug, isUndefined;

  debug = require('debug')('@scuba-squad:validation:isUndefined');

  isUndefined = function(value) {
    debug('call:isUndefined(%o)', value);
    return value === void 0;
  };

  module.exports = isUndefined;

}).call(this);
