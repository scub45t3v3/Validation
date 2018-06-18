(function() {
  var REGEX, debug, isDomainName, isEmailAddress, isLength;

  debug = require('debug')('@scuba-squad:validation:isEmailAddress');

  isLength = require('./isLength');

  isDomainName = require('./isDomainName');

  /*
   * The following method validates the local-part to dot-atom RFC 5322
   * thus removing the quoted-string, obs-local-part, and comments.
   * It validates the domain to dot-atom RFC 5322 with RFC 5890 IDN support
   * thus removing the domain-literal, obs-domain and comments.
   *
   * Since everyone seems to have a different interpretation on what a valid email
   * address is or is not. I am not trying to validate to a specific specification
   * as the RFC specs change, discourage, deprecate and leave some ambiguity in
   * their interpretation and at the end of the day what really matters is what
   * the various email service providers support and interpret.
   */
  REGEX = /^((?:[\w!#$%&'*+\/=?^`{|}~-]+\.?)*[\w!#$%&'*+\/=?^`{|}~-]+)@([^\s:\[\]\/%?#@]+)$/i; // username
  // @ seperator
  // domain

  isEmailAddress = function(value) {
    var domain, username;
    debug('call:isEmailAddress(%o)', value);
    value = value != null ? typeof value.match === "function" ? value.match(REGEX) : void 0 : void 0;
    domain = isDomainName(value != null ? value[2] : void 0, true);
    username = isLength(value != null ? value[1] : void 0, {
      min: 1,
      max: 64
    });
    value = isLength(value != null ? value[0] : void 0, {
      min: 6,
      max: 255
    });
    return value && username && domain;
  };

  module.exports = isEmailAddress;

}).call(this);
