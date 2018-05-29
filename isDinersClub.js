(function() {
  var REGEX, isDinersClub, isLuhn;

  isLuhn = require('./isLuhn');

  REGEX = /^3(?:0[0-5]|[68]\d)\d{11}$/;

  isDinersClub = function(value) {
    return REGEX.test(value) && isLuhn(value);
  };

  module.exports = isDinersClub;

}).call(this);
