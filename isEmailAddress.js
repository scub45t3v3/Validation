(function() {
  var REGEX, isEmailAddress;

  REGEX = /^(?:[\w!#$%&'*+\/=?^`{|}~-]+\.?)*[\w!#$%&'*+\/=?^`{|}~-]+@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+(?:[a-z\d-]*[a-z\d])+$/i; // username
  // @ seperator
  // domain

  isEmailAddress = function(value) {
    return REGEX.test(value);
  };

  module.exports = isEmailAddress;

}).call(this);
