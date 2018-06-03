(function() {
  var debug, isBoolean, isIterator;

  debug = require('debug')('@scuba-squad:validation:isIterator');

  isBoolean = require('./isBoolean');

  isIterator = function(value) {
    var ref;
    debug('call:isIterator(%o)', value);
    return isBoolean(value != null ? typeof value.next === "function" ? (ref = value.next()) != null ? ref.done : void 0 : void 0 : void 0);
  };

  module.exports = isIterator;

}).call(this);
