(function() {
  var REGEX, isDataURI;

  REGEX = /^data:(?:[\w-]+\/[\w.+-]+(?:;[\w!#$%&'*+.^`{|}~-]+=[\w!#$%&'*+.^`{|}~-]+)*)?(?:;base64)?,[\w()\/!$&'*+.,;=~:@?%-]*$/i; // schema
  // mimetype
  // attribute=value pairs
  // base64 extension
  // data

  isDataURI = function(value) {
    return REGEX.test(value);
  };

  module.exports = isDataURI;

}).call(this);
