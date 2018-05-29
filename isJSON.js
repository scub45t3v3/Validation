(function() {
  var isJSON;

  isJSON = function(value) {
    var error;
    try {
      JSON.parse(value);
      return true;
    } catch (error1) {
      error = error1;
      return false;
    }
  };

  module.exports = isJSON;

}).call(this);
