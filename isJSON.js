(function() {
  var debug, isJSON;

  debug = require('debug')('@scuba-squad:validation:isJSON');

  isJSON = function(value) {
    var error;
    debug('call:isJSON(%o)', value);
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
