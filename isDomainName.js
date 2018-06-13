(function() {
  var REGEX, debug, isDomainName, punycode;

  debug = require('debug')('@scuba-squad:validation:isDomainName');

  punycode = require('punycode');

  REGEX = /^(?:(?:[\w\-~!$&'()*+,;=']|%[\da-f]{2})+\.)+[a-z\d](?:[\w\-~!$&'()*+,;=']|%[\da-f]{2})*[a-z\d]$/; // subdomain(s)
  // top level domain

  isDomainName = function(value, idn = true) {
    var err;
    debug('call:isDomainName(%o, %o)', value, idn);
    if (idn) {
      try {
        value = punycode.toASCII(value);
      } catch (error) {
        err = error;
        debug('error:punycode %o', err);
        return false;
      }
    }
    return REGEX.test(value);
  };

  module.exports = isDomainName;

}).call(this);
