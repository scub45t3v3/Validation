(function() {
  var isGenerator;

  isGenerator = function(value) {
    return ((value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) === '[object Generator]';
  };

  module.exports = isGenerator;

}).call(this);
