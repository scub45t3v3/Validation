(function() {
  var isAll, isSHA256;

  isAll = require('./isAll');

  isSHA256 = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 64]);
  };

  module.exports = isSHA256;

}).call(this);
