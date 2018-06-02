(function() {
  var DOMAIN_REGEX, REGEX, debug, isIP, isURL, url;

  debug = require('debug')('@scuba-squad:validation:isURL');

  url = require('url');

  isIP = require('./isIP');

  /*
   * No support for IPvFuture as defined in RFC3986 section 3.2.2 this is
   * intentional as none exist, so I argue that it is still invalid until such time
   *
   * https://tools.ietf.org/html/rfc3986#section-3.2.2
   * IPvFuture = /^\[v[\da-f]\.[\w!$&'()*+,:;=~\.-]+\]$/i
   */
  REGEX = /^[a-z][a-z\d+.-]+:\/\/(?:(?:[\w!$&'()*+,;=~.-]|\%[\da-f]{2})+(?::(?:[\w!$&'()*+,;=~.-]|\%[\da-f]{2})+)?@)?(?:[^\s:\/?#@]+)(?::\d+)?(?:\/(?:[\w!$&'()*+,;:@=~.-]|\%[\da-f]{2})+)*\/?(?:\?(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?(?:\#(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?$/i; // protocol
  // protocol seperator
  // username
  // username seperator
  // password
  // hostname seperator
  // hostname
  // port
  // pathname
  // query
  // fragment

  DOMAIN_REGEX = /^(?:[a-z\d]+(?:-+[a-z\d]+)*\.)+[a-z][a-z\d-]*[a-z\d]$/i;

  isURL = function(value) {
    var parse;
    debug('call:isURL(%o)', value);
    if (!REGEX.test(value)) {
      return false;
    }
    parse = url.parse(value);
    return DOMAIN_REGEX.test(parse.hostname) || isIP(parse.hostname);
  };

  module.exports = isURL;

}).call(this);
