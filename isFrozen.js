(function() {
  var isFrozen;

  isFrozen = function(value) {
    var error;
    try {
      return Object.isFrozen(value);
    } catch (error1) {
      error = error1;
      return true;
    }
  };

  module.exports = isFrozen;

}).call(this);
