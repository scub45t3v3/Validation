(function() {
  var debug, isNull;

  debug = require('debug')('@scuba-squad:validation:isNull');

  isNull = function(value) {
    debug('call:isNull(%o)', value);
    return value === null;
  };

  module.exports = isNull;

}).call(this);
