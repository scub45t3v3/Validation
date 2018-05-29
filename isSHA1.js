(function() {
  var isAll, isSHA1;

  isAll = require('./isAll');

  isSHA1 = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 40]);
  };

  module.exports = isSHA1;

}).call(this);
