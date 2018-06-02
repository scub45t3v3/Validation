(function() {
  var debug, isBool, isIterator;

  debug = require('debug')('@scuba-squad:validation:isIterator');

  isBool = require('./isBool');

  isIterator = function(value) {
    var ref;
    debug('call:isIterator(%o)', value);
    return isBool(value != null ? typeof value.next === "function" ? (ref = value.next()) != null ? ref.done : void 0 : void 0 : void 0);
  };

  module.exports = isIterator;

}).call(this);
