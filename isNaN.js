(function() {
  var debug, isNaN;

  debug = require('debug')('@scuba-squad:validation:isNaN');

  isNaN = function(value) {
    debug('call:isNaN(%o)', value);
    return Number.isNaN(value);
  };

  module.exports = isNaN;

}).call(this);
