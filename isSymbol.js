(function() {
  var isSymbol;

  isSymbol = function(value) {
    return typeof value === 'symbol' || /^Symbol\(.*\)$/.test(value);
  };

  module.exports = isSymbol;

}).call(this);
