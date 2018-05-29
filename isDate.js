(function() {
  var isDate, isRegExp, moment;

  moment = require('moment');

  isRegExp = require('./isRegExp');

  isDate = function(value) {
    return !isRegExp(value) && moment(value).isValid();
  };

  module.exports = isDate;

}).call(this);
