(function() {
  var REGEX, debug, isURN;

  debug = require('debug')('@scuba-squad:validation:isURN');

  REGEX = /^urn:([a-z\d][a-z\d-]{0,30}[a-z\d]):((?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@\/]|%[\da-fA-F]{2})*)(\?\+(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*)?(\?\=(?:[\w.\-~!$&'()*+,;=':@]|%[\da-fA-F]{2})+(?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*)?(\#(?:[\w.\-~!$&'()*+,;=':@\/?]|%[\da-fA-F]{2})*)?$/i; // NID
  // NSS
  // r-component
  // q-component
  // f-component

  isURN = function(value) {
    debug('call:isURN(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isURN;

}).call(this);
