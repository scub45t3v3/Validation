(function() {
  var isSealed;

  isSealed = function(value) {
    var error;
    try {
      return Object.isSealed(value);
    } catch (error1) {
      error = error1;
      return true;
    }
  };

  module.exports = isSealed;

}).call(this);
