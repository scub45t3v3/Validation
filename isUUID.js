(function() {
  var REGEX, debug, isUUID;

  debug = require('debug')('@scuba-squad:validation:isUUID');

  REGEX = /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i;

  isUUID = function(value) {
    debug('call:isUUID(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isUUID;

}).call(this);
