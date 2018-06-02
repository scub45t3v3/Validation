(function() {
  var debug, isDate, isRegExp, moment;

  debug = require('debug')('@scuba-squad:validation:isDate');

  moment = require('moment');

  isRegExp = require('./isRegExp');

  isDate = function(value) {
    debug('call:isDate(%o)', value);
    return !isRegExp(value) && moment(value).isValid();
  };

  module.exports = isDate;

}).call(this);
