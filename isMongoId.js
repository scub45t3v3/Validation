(function() {
  var debug, isAll, isMongoId;

  debug = require('debug')('@scuba-squad:validation:isMongoId');

  isAll = require('./isAll');

  isMongoId = function(value) {
    debug('call:isMongoId(%o)', value);
    return isAll(value, 'isHexadecimal', ['isLength', 24]);
  };

  module.exports = isMongoId;

}).call(this);
