(function() {
  var REGEX, debug, isMACAddress;

  debug = require('debug')('@scuba-squad:validation:isMACAddress');

  REGEX = /^(?:[a-f\d]{2}:){5}[a-f\d]{2}$/i;

  isMACAddress = function(value) {
    debug('call:isMACAddress(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isMACAddress;

}).call(this);
