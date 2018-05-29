(function() {
  var REGEX, isMACAddress;

  REGEX = /^(?:[a-f\d]{2}:){5}[a-f\d]{2}$/i;

  isMACAddress = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMACAddress;

}).call(this);
