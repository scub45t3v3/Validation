(function() {
  var debug, isAfter, isDate, isFloat, moment;

  debug = require('debug')('@scuba-squad:validation:isAfter');

  moment = require('moment');

  isFloat = require('./isFloat');

  isDate = require('./isDate');

  isAfter = function(value, compare = Date.now()) {
    debug('call:isAfter(%o, %o)', value, compare);
    if (isFloat(value) && isFloat(compare)) {
      return parseFloat(value) > parseFloat(compare);
    } else if (isDate(value)) {
      return moment(value).isAfter(compare);
    }
    return false;
  };

  module.exports = isAfter;

}).call(this);
