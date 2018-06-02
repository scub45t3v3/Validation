(function() {
  var REGEX, debug, isDataURI;

  debug = require('debug')('@scuba-squad:validation:isDataURI');

  REGEX = /^data:(?:[\w-]+\/[\w.+-]+(?:;[\w!#$%&'*+.^`{|}~-]+=[\w!#$%&'*+.^`{|}~-]+)*)?(?:;base64)?,[\w()\/!$&'*+.,;=~:@?%-]*$/i; // schema
  // mimetype
  // attribute=value pairs
  // base64 extension
  // data

  isDataURI = function(value) {
    debug('call:isDataURI(%o)', value);
    return REGEX.test(value);
  };

  module.exports = isDataURI;

}).call(this);
