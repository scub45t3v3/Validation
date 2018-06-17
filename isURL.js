(function() {
  var REGEX, debug, isDomainName, isIP, isURL;

  debug = require('debug')('@scuba-squad:validation:isURL');

  isDomainName = require('./isDomainName');

  isIP = require('./isIP');

  REGEX = /^[a-z][a-z\d+.-]+:\/\/(?:(?:[\w!$&'()*+,;:=~.-]|\%[\da-f]{2})+@)?([^\s:\[\]\/%?#@]+|\[[:.%\w]+\])(?::\d+)?(?:\/(?:[\w!$&'()*+,;:@=~.-]|\%[\da-f]{2})+)*\/?(?:\?(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?(?:\#(?:[\w!$&'()*+,;:@=~?\/.-]|\%[\da-f]{2})*)?$/i; // protocol
  // user
  // domain|ip
  // port
  // path
  // query
  // fragment

  isURL = function(value) {
    var ref, ref1;
    debug('call:isURL(%o)', value);
    value = value != null ? typeof value.match === "function" ? (ref = value.match(REGEX)) != null ? (ref1 = ref[1]) != null ? ref1.replace(/^\[|\]$/g, '') : void 0 : void 0 : void 0 : void 0;
    return !!value && (isDomainName(value) || isIP(value));
  };

  module.exports = isURL;

}).call(this);
