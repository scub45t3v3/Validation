(function() {
  var isIterableIterator;

  isIterableIterator = function(value) {
    var name;
    return (value != null ? typeof value[name = Symbol.iterator] === "function" ? value[name]() : void 0 : void 0) === value;
  };

  module.exports = isIterableIterator;

}).call(this);
