(function() {
  var isPlural, isString, pluralize;

  pluralize = require('pluralize');

  isString = require('./isString');

  isPlural = function(value) {
    return isString(value) && pluralize.isPlural(value);
  };

  module.exports = isPlural;

}).call(this);
