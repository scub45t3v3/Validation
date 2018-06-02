(function() {
  var debug, isSingular, isString, pluralize;

  debug = require('debug')('@scuba-squad:validation:isSingular');

  pluralize = require('pluralize');

  isString = require('./isString');

  isSingular = function(value) {
    debug('call:isSingular(%o)', value);
    return isString(value) && pluralize.isSingular(value);
  };

  module.exports = isSingular;

}).call(this);
