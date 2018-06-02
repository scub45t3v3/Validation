(function() {
  var REGEX, debug, isHexColor;

  debug = require('debug')('@scuba-squad:validation:isHexColor');

  REGEX = /^#?(?:[a-f\d]{3}){1,2}$/i;

  isHexColor = function(value) {
    debug('call:isHexColor(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isHexColor;

}).call(this);
