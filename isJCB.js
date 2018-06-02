(function() {
  var REGEX, debug, isJCB, isLuhn;

  debug = require('debug')('@scuba-squad:validation:isJCB');

  isLuhn = require('./isLuhn');

  REGEX = /^(?:2131|1800|35\d{3})\d{11}$/;

  isJCB = function(value) {
    debug('call:isJCB(%o)', value);
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isJCB;

}).call(this);
