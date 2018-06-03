(function() {
  var REGEX, debug, isSemVer;

  debug = require('debug')('@scuba-squad:validation:isSemVer');

  REGEX = /^(?:\d+\.){2}\d+(?:-(?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*)(?:\.(?:0|[1-9]\d*|\d*[a-z-][a-z\d-]*))*)?(?:\+[a-z\d-]+(?:\.[a-z\d-]+)*)?$/i; // MAJOR.MINOR.PATCH
  // pre-release tag
  // metadata tag

  isSemVer = function(value) {
    debug('call:isSemVer(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isSemVer;

}).call(this);
