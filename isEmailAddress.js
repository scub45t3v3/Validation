(function() {
  var REGEX, debug, isEmailAddress;

  debug = require('debug')('@scuba-squad:validation:isEmailAddress');

  REGEX = /^(?:[\w!#$%&'*+\/=?^`{|}~-]+\.?)*[\w!#$%&'*+\/=?^`{|}~-]+@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+(?:[a-z\d-]*[a-z\d])+$/i; // username
  // @ seperator
  // domain

  isEmailAddress = function(value) {
    debug('call:isEmailAddress(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isEmailAddress;

}).call(this);
