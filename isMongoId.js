(function() {
  var isAll, isMongoId;

  isAll = require('./isAll');

  isMongoId = function(value) {
    return isAll(value, 'isHexadecimal', ['isLength', 24]);
  };

  module.exports = isMongoId;

}).call(this);
