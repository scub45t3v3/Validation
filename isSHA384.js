(function() {
  var isAll, isSHA384;

  isAll = require('./isAll');

  isSHA384 = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 96]);
  };

  module.exports = isSHA384;

}).call(this);
