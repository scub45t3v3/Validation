(function() {
  var isAll, isSHA512;

  isAll = require('./isAll');

  isSHA512 = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 128]);
  };

  module.exports = isSHA512;

}).call(this);
