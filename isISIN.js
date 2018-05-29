(function() {
  var REGEX, isISIN, isLuhn;

  isLuhn = require('./isLuhn');

  REGEX = /^[a-z\d]{12}$/i;

  isISIN = function(value) {
    var sanitized;
    sanitized = value != null ? typeof value.toString === "function" ? value.toString().replace(/[a-z]/gim, function(match) {
      return `${parseInt(match, 36)}`;
    }) : void 0 : void 0;
    return REGEX.test(value) && isLuhn(sanitized);
  };

  module.exports = isISIN;

}).call(this);
