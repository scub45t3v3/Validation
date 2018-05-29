(function() {
  var DOUBLE, REGEX, _, isLuhn;

  _ = require('underscore');

  REGEX = /^\d+$/;

  DOUBLE = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

  isLuhn = function(value) {
    var sum;
    if (!REGEX.test(value)) {
      return false;
    }
    sum = _.reduce(value != null ? typeof value.toString === "function" ? value.toString().split('').reverse() : void 0 : void 0, function(memo, val, idx) {
      val = parseInt(val);
      if (parseInt(idx) % 2) {
        return memo + DOUBLE[val];
      }
      return memo + val;
    }, 0);
    return !(sum % 10);
  };

  module.exports = isLuhn;

}).call(this);
