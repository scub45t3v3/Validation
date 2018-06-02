(function() {
  var debug, isArguments;

  debug = require('debug')('@scuba-squad:validation:isArguments');

  isArguments = function(value) {
    debug('call:isArguments(%o)', value);
    return ((value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) === '[object Arguments]';
  };

  module.exports = isArguments;

}).call(this);
