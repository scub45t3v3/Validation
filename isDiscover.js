(function() {
  var REGEX, debug, isDiscover, isLuhn;

  debug = require('debug')('@scuba-squad:validation:isDiscover');

  isLuhn = require('./isLuhn');

  REGEX = /^6(?:011|5\d{2})\d{12}$/;

  isDiscover = function(value) {
    debug('call:isDiscover(%o)', value);
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isDiscover;

}).call(this);
