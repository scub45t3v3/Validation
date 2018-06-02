(function() {
  var debug, isBefore, isDate, isFloat, moment;

  debug = require('debug')('@scuba-squad:validation:isBefore');

  moment = require('moment');

  isFloat = require('./isFloat');

  isDate = require('./isDate');

  isBefore = function(value, compare = Date.now()) {
    debug('call:isBefore(%o, %o)', value, compare);
    if (isFloat(value) && isFloat(compare)) {
      return parseFloat(value) < parseFloat(compare);
    } else if (isDate(value)) {
      return moment(value).isBefore(compare);
    }
    return false;
  };

  module.exports = isBefore;

}).call(this);
