(function() {
  var isBool, isIterator;

  isBool = require('./isBool');

  isIterator = function(value) {
    var ref;
    return isBool(value != null ? typeof value.next === "function" ? (ref = value.next()) != null ? ref.done : void 0 : void 0 : void 0);
  };

  module.exports = isIterator;

}).call(this);
