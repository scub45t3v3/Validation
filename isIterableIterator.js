(function() {
  var debug, isIterableIterator;

  debug = require('debug')('@scuba-squad:validation:isIterableIterator');

  isIterableIterator = function(value) {
    var name;
    debug('call:isIterableIterator(%o)', value);
    return (value != null ? typeof value[name = Symbol.iterator] === "function" ? value[name]() : void 0 : void 0) === value;
  };

  module.exports = isIterableIterator;

}).call(this);
