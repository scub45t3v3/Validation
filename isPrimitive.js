(function() {
  var debug, isPrimitive;

  debug = require('debug')('@scuba-squad:validation:isPrimitive');

  isPrimitive = function(value) {
    var primitives;
    debug('call:isPrimitive(%o)', value);
    primitives = ['boolean', 'string', 'number', 'symbol'];
    return (value == null) || !!~primitives.indexOf(typeof value);
  };

  module.exports = isPrimitive;

}).call(this);
