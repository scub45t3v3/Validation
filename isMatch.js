(function() {
  var _isMatch, debug, isMatch;

  debug = require('debug')('@scuba-squad:validation:isMatch');

  ({isMatch} = require('underscore'));

  _isMatch = isMatch;

  isMatch = function(value, compare) {
    debug('call:isMatch(%o, %o)', value, compare);
    return _isMatch(value, compare);
  };

  module.exports = isMatch;

}).call(this);
