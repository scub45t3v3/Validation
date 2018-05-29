(function() {
  var isAll, isMD5;

  isAll = require('./isAll');

  isMD5 = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 32]);
  };

  module.exports = isMD5;

}).call(this);
