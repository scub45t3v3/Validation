(function() {
  var debug, isGenerator;

  debug = require('debug')('@scuba-squad:validation:isGenerator');

  isGenerator = function(value) {
    debug('call:isGenerator(%o)', value);
    return ((value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) === '[object Generator]';
  };

  module.exports = isGenerator;

}).call(this);
