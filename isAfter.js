(function() {
  var isAfter, isDate, isFloat, moment;

  moment = require('moment');

  isFloat = require('./isFloat');

  isDate = require('./isDate');

  isAfter = function(value, compare = Date.now()) {
    if (isFloat(value) && isFloat(compare)) {
      return parseFloat(value) > parseFloat(compare);
    } else if (isDate(value)) {
      return moment(value).isAfter(compare);
    }
    return false;
  };

  module.exports = isAfter;

}).call(this);
