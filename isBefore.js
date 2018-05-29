(function() {
  var isBefore, isDate, isFloat, moment;

  moment = require('moment');

  isFloat = require('./isFloat');

  isDate = require('./isDate');

  isBefore = function(value, compare = Date.now()) {
    if (isFloat(value) && isFloat(compare)) {
      return parseFloat(value) < parseFloat(compare);
    } else if (isDate(value)) {
      return moment(value).isBefore(compare);
    }
    return false;
  };

  module.exports = isBefore;

}).call(this);
