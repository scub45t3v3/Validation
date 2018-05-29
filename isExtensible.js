(function() {
  var isExtensible;

  isExtensible = function(value) {
    var error;
    try {
      return Object.isExtensible(value);
    } catch (error1) {
      error = error1;
      return false;
    }
  };

  module.exports = isExtensible;

}).call(this);
