(function() {
  var isArguments;

  isArguments = function(value) {
    return ((value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) === '[object Arguments]';
  };

  module.exports = isArguments;

}).call(this);
