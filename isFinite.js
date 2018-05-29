(function() {
  var isFinite, isFloat;

  isFloat = require('./isFloat');

  isFinite = function(value) {
    return isFloat(value) && Number.isFinite(parseFloat(value));
  };

  module.exports = isFinite;

}).call(this);
