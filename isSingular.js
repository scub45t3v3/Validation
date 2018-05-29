(function() {
  var isSingular, isString, pluralize;

  pluralize = require('pluralize');

  isString = require('./isString');

  isSingular = function(value) {
    return isString(value) && pluralize.isSingular(value);
  };

  module.exports = isSingular;

}).call(this);
